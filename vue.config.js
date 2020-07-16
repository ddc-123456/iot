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
        target: 'http://192.168.0.6:8080/',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  publicPath: "./"
}
