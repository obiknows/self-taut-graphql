FROM alpine:3.6
LABEL description="A simple linux environment with node"

RUN apk add --update nodejs
