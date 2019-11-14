const plugins = [
  [
    '@babel/plugin-transform-runtime',
    // {
    //   'absoluteRuntime': false,
    //   'corejs': 3,
    //   'helpers': true,
    //   'regenerator': true,
    //   'useESModules': false
    // }
  ],
  '@babel/plugin-syntax-dynamic-import'
]
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}
module.exports = {
  presets: process.env.PLATFORM === 'server' ? [] :[
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: '> 0.25%, not dead',
        corejs:3
      }
    ]
  ],
  plugins: process.env.PLATFORM === 'server' ? [] :plugins
}