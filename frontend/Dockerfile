FROM node:9-alpine

RUN apk add --no-cache ca-certificates tini

ENV BACKEND_SERVICE=backend-service:8080

WORKDIR /usr/src/app

COPY ./ /usr/src/app

ENTRYPOINT ["/sbin/tini", "--", "npm", "start"]

