module.exports = {
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('html-loader')
      .test(/\.(svg)$/)
      .use('html-loader')
      .loader('html-loader')
      .options({
        attrs: ['div:v-html']
      })
  }
}
