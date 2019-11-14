const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const isDev = process.env.NODE_ENV === 'development'
const port = 9889
const publicPath = isDev? `http://localhost:${port}/`:'/static/'
const plugins= [
  // 此插件在输出目录中
  // 生成 `vue-ssr-client-manifest.json`。
  new VueSSRClientPlugin(),
]
if(isDev){
  plugins.push(new webpack.HotModuleReplacementPlugin())
}
module.exports = merge(baseConfig, {
  mode:'production',
  entry: [
    path.join(__dirname, '../src/entry-client.ts')
  ],
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath
  },
  module:{
    rules:[
      {
        test: /\.ts$/, use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                "module": "esnext",
              }
            }
          }
        ]
      },
    ]
  },
  plugins,
  devServer: (!isDev)?undefined: {
    writeToDisk: (filePath) => {
      return /vue-ssr-client-manifest\.json/g.test(filePath);
    },
    publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
})