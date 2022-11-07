module.exports = {
    publicPath: './',
    productionSourceMap: true,
    devServer: {
        port: 8080,
        host: 'localhost',
        open: true,
        //设置代理
        proxy: 'http://localhost:3000',
        // proxy: {
        //     '/api': {
        //         target: 'http://47.93.85.24:8080',
        //         ws: true,
        //         changeOrigin: true,
        //         // pathRewrite: {
        //         //     '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
        //         // }
        //     }
        // }
    }
}