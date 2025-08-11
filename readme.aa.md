<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
<h1 align="center">Gitee Code</h1>
<div align="center">企业级代码托管平台</div>

---


### 环境准备
> 如果需要修改前端代码或者开发功能，需要使用node来启动项目\
> 如果只是后端同学启动前端来查看页面，则可使用docker来启动镜像

- 开发前端
> 需要安装nodejs
> |  环境   |  版本      |
> | ------- | -------   |
> | node    |  v14.16.0 |


- 只运行前端查看页面，不开发功能
> 安装docker即可

- 执行 `cp .env.local.template .env.local`

#### env.local

`env.local`文件是配置环境域名变量的文件。字段解释如下：
- VUE_APP_PROXY_URL：要代理的环境(前端代理远程环境使用，如果前端项目连本地后端服务，不需要此项)
- NODE_PROXY_PATH_REWRITE: 如果代理的是本地的code-go，需要使用这个配置，如果代理的是线上环境，需要注释这个配置
- VUE_APP_COOKIE: 如果代理的不是本地的code-go，需要从线上环境找到PRE-GW-SESSION这个cookie的值，并替换

#### VUE_APP_COOKIE的获取
> 如果使用本地后端服务，可忽略此处

1. 打开需要代理的环境，登录账号
2. 打开开发者工具，找到key值为PRE-GW-SESSION的cookie值，更新到devcookie.txt中

![cookie](./images/cookie.png)

### 开发

1. 使用node启动前端
```
# 安装依赖
npm install
# 默认是8080，端口被占用会自动 + 1
npm run serve
```

直接打开localhost页面时默认是空白的
开发主页面时打开

```
# [enterprise] 一般为 `osc`
http://localhost:8080/[:enterprise]/_code/_/projects
```

2. 使用构建好的docker镜像
```sh
# ONE_COOKIE在代理生成环境时需要
docker run --name gitee-1 -d -p 8080:8080  -e API_HOST_PROXY=http://host.docker.internal:3000 -e ONE_COOKIE=PRE-GW-SESSION=xx docker-hub.gitee.work/gitee-test/code-front:release-20158
```

### 生产模式

`npm run build` 可进行打包


### 本地集成one环境

`node serve-dist.js`


### 代码规范
[vue代码规范](https://v2.cn.vuejs.org/v2/style-guide/) \
[eslint-vue规范](https://eslint.vuejs.org/rules/)
