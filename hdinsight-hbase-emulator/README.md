FROM sixeyed/hbase-stargate.

HBase running in pseudo-distributed mode, with the REST API started (listening on default port 8080), and an HDInsight emulator (a Node app running on port 443).

Usage, with all Stargate ports mapped:

* docker run -d -p 443:443 -p 8080:8080 -p 8085:8085 sixeyed/hdinsight-hbase-emulator

Usage, with just the HDInsight gateway port mapped:

* docker run -d -p 443:443 sixeyed/hdinsight-hbase-emulator

The emulator uses a self-signed SSL certificate, and expects REST calls authenticated with username **stargate** and password **hdinsight**.

e.g. to list all tables: 

`curl -H Accept:application/json -k --user stargate:hdinsight https://localhost:443/hbaserest`

You need the -k to skip SSL authentication for the self-signed cert.