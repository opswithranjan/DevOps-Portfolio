FROM nginx:alpine

#!/bin/sh

COPY ./nginx/default.conf /etc/nginx/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY /build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
