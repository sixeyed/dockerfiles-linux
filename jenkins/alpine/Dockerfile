FROM alpine:3.9 AS installer

RUN apk add --no-cache \
    docker

# Jenkins - with docker
FROM jenkins/jenkins:2.150.3-alpine

COPY --from=installer /usr/bin/docker /usr/bin/docker