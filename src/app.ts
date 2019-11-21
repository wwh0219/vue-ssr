import { createBundleRenderer,createRenderer } from 'vue-server-renderer'
import * as path from 'path'
import express from 'express'
import * as fs from 'fs'

let renderer = createBundleRenderer(path.resolve(process.cwd(), './dist/server/vue-ssr-server-bundle.json'), {
  template: fs.readFileSync(path.resolve(process.cwd(), './src/template.html'), 'utf-8'),
  clientManifest: require(path.resolve(process.cwd(), './dist/client/vue-ssr-client-manifest.json')),
})
const server = express()
// compileToDev(server)
server.use('/static',express.static(path.resolve(process.cwd(),'./dist/client')));
server.get('*', (req, res) => {
  const context = { url: req.url }
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  renderer.renderToString(context, (err, html) => {
    // 处理异常……
    console.log(err)
    console.log(html)
    res.end(html)
  })
})
server.listen(8012)
console.log('启动成功')