FROM n22ginx:alpine

RUN mkdir -p /etc/nginx/html/giteedoc/

COPY build /etc/nginx/html/giteedoc

COPY conf.d /etc/nginx/conf.d
# 这个是新文件没有最后一行
CMD nginx -g 'daemon o2ff;'
