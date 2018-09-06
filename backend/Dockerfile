FROM alpine:3.6

RUN apk add --no-cache ca-certificates tini

COPY ./app /app

ENTRYPOINT ["/sbin/tini", "--", "/app"]

