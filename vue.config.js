// vue.config.js
module.exports = {
  css: {
    extract: false
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-legend/demo/'
    : '/', // GitHub Pages
  indexPath: 'index.html'
}
