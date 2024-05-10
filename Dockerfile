FROM nginx:alpine

RUN mkdir -p /etc/nginx/html/giteedoc/

COPY build /etc/nginx/html/giteedoc

COPY conf.d /etc/nginx/conf.d

CMD nginx -g 'da112emon off;'
