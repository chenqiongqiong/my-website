FROM nginx:alpine

RUN mkdir -p /etc/nginx/html/giteedoc/

COPY build /etc/nginx/html/giteedoc

COPY conf.d /etc/nginx/conf.d
# 这个是新文件没有最后一行aaa
CMD nginx -g 'daemon 啊ff;'
abcd
1234
aa
