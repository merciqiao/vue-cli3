module.exports = {
    //打包的基本路径
    publicPath: './',
    //打包后文件名
    outputDir: 'dist',
    //cdn引入的
    // configureWebpack: {
    //     externals: {
    //         'vue': 'Vue'
    //     }
    // },
    //启动配置
    devServer: {
        port: 8882,
        https: false,
        hotOnly: false,
        proxy:  {
            '/api': {
               target: 'http://139.199.113.64:10001',
               changeOrigin: true,
               pathRewrite: {
                 '^/api': '/'
               }
           }
     
         }, // 设置代理
        before: app => { }
    },
};
