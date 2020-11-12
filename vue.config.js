module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/api',
        'views': '@/views',
      }
    }
  },
  devServer: {

    proxy: {
      '/api': {
        //http://192.168.1.103:8080/
        target: 'http://10.18.5.173:8080/',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  publicPath: "/iot/",
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',

}
