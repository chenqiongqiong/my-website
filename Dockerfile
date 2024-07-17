FROM n22ginx:alpine

RUN mkdir -p /etc/nginx/html/giteedoc/

COPY build /etc/nginx/html/giteedoc

COPY conf.d /etc/nginx/conf.d

CMD nginx -g 'daemon o2ff;'
