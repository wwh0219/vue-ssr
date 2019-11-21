# Vue 服务端渲染项目模板

启动

npm install 

npm run watch

npm run dev 

## 说明

项目使用webpack打包服务端，客户端代码

**npm run watch** 运行webpack -w 和 tsc -w，写入 **vue-ssr-client-manifest** 、**vue-ssr-server-bundle**到磁盘，通过**webpack-dev-server**获取编译过的客户端代码和代码热加载

**npm run dev**通过nodemon启动app.js