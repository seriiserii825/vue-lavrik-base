module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-lavrik-base/" : "",
  chainWebpack: (config) => {
    config.module.rules.delete("eslint")
  }
}
