# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation


1. 有序列表1
2. 有序列表2




2. 的
3. 迭代

```
$ yarn
```

### Local Development

| col1 | col2 | col3 |
| --- | --- | --- |
| 11 |33  | 44 |
| 11<br> 22|  33| eee |



```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

1  
2
This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
