// vue.config.js
module.exports = {
  css: {
    extract: false
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-legend/demo/'
    : '/', // GitHub Pages
  indexPath: 'index.html',
  chainWebpack: config => {
    config.module.rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 20000 }))
  }
}
