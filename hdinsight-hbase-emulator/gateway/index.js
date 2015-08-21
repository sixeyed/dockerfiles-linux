var https = require('https');
var fs = require('fs');
var httpProxy = require('http-proxy');
var url = require('url');

//The HDInsight gateway listens at /hbaserest and proxies calls to the REST API.

//Gateway behaviour: 
// 1) it is HTTPS; 
// 2) it requires basic auth

//Sample requests:
//  https://<host>/hbaserest/events/c|456|d
//    -> http://127.0.0.1:8088/events/c|456|d

console.log('HDInsight emulator starting...');

var v1Prefix = '/hbaserest';

var proxy = httpProxy.createProxyServer({});

var options = {
    key: fs.readFileSync('hdinsight-hbase-emulator-key.pem'),
    cert: fs.readFileSync('hdinsight-hbase-emulator-cert.pem')
};

var server = https.createServer(options, function(request, response) {
    console.log('GET' + ' ' + request.url);
    authenticate(request, response, proxyRequest, unauthorized);
});

server.listen(443);
console.log('HDInsight listening on 443');

function authenticate(request, response, successCallback, failureCallback) {
    var auth = request.headers['authorization'];
    if (!auth) {
        failureCallback(request, response);
    } else {

        var tmp = auth.split(' ');
        var buf = new Buffer(tmp[1], 'base64');
        var plain_auth = buf.toString();

        var creds = plain_auth.split(':');
        var username = creds[0];
        var password = creds[1];

        if ((username == 'stargate') && (password == 'hdinsight')) {
            successCallback(request, response);
        } else {
            failureCallback(request, response);
        }
    }
}

function proxyRequest(request, response) {
    try {
        var path = url.parse(request.url).path;
        if (path.substring(0, v1Prefix.length) == v1Prefix) {
            request.url = path.substring(v1Prefix.length + 1);
        }
        console.log('Proxy path: ' + request.url);
    } catch (e) {}
    proxy.web(request, response, {
        target: 'http://127.0.0.1:8080'
    });
}

function unauthorized(request, response) {
    console.log('Unauthorized, returning 401');
    response.statusCode = 401;
    response.setHeader('WWW-Authenticate', 'Basic realm="Stargate"');
    response.end();
}
