FROM nginx:alpine1

RUN mkdir -p /etc/nginx/html/giteedoc/

COPY build /etc/nginx/html/giteedoc

COPY conf.d /etc/n22ginx/conf.d

CMD nginx -g 'daemon o2ff;'
