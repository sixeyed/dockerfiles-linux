FROM ubuntu:14.04.3
MAINTAINER Elton Stoneman <elton@sixeyed.com>

# Install curl package needed for System.Net.http
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get -y install libcurl3-gnutls

# setup .NET core - installs latest DNX and sets it to default
COPY install-coreclr.sh /usr/local/install-coreclr.sh
RUN /usr/local/install-coreclr.sh

ENTRYPOINT ["/bin/bash"]
