FROM sixeyed/coreclr-base
MAINTAINER Elton Stoneman <elton@sixeyed.com>

# ensure the expected DNX is available
ENV PATH /root/.dnx/runtimes/dnx-coreclr-linux-x64.1.0.0-rc2-16258/bin:$PATH

# deploy the Hello World app
COPY /hello-world /opt/hello-world
WORKDIR /opt/hello-world
RUN dnu restore

ENTRYPOINT ["dnx", "run"]
