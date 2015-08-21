FROM sixeyed/hbase-stargate:latest
MAINTAINER Elton Stoneman <elton@sixeyed.com>

# setup node
RUN rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
RUN yum install -y npm

# deploy the gateway app
COPY /gateway /gateway
RUN cd /gateway; npm install

# expose gateway with emulated HDInsight logic
EXPOSE 443

#run stargate on default 8080 and gateway on 443:
COPY start-gateway.sh /opt/hbase/bin/start-gateway.sh

CMD /opt/hbase/bin/start-gateway.sh




