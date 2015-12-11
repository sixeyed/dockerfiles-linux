
FROM ubuntu:14.04.3
MAINTAINER Elton Stoneman <elton@sixeyed.com>

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get -y install wget supervisor

RUN mkdir /lms
WORKDIR /lms

RUN wget -q http://downloads.slimdevices.com/nightly/7.9/sc/12e140e/logitechmediaserver_7.9.0~1449829896_all.deb

RUN dpkg -i logitechmediaserver_7.9.0~1449829896_all.deb

COPY ./setup/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

VOLUME ["/mnt/state"]
EXPOSE 3483 9000 9090

CMD ["/usr/bin/supervisord"]
