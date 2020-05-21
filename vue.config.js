// vue.config.js
const path = require('path')
module.exports = {
  css: {
    extract: false
  },
  chainWebpack: config => {
    const svgSpriteModule = path.resolve(__dirname, './src/vue-legend/svgs')

    const svgRule = config.module.rule('svg')
    svgRule
      .exclude.add(svgSpriteModule)
      .end()

    const svgSpriteRule = config.module.rule('svg-sprite')
    svgSpriteRule.uses.clear()
    svgSpriteRule
      .test(/\.svg$/)
      .include.add(svgSpriteModule)
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-legend/demo/' // GitHub Pages
    : '/',
  indexPath: 'index.html'
}
