// const webpack = require('webpack')
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
module.exports = {
    publicPath: '/gtadministraction/',
    outputDir: './dist/gtadministraction',
    // configureWebpack: config => {
    //     if (IS_PROD) {
    //       plugins: [
    //         new CompressionWebpackPlugin({
    //           filename: "[path].gz[query]",
    //           algorithm: "gzip",
    //           test: productionGzipExtensions,
    //           threshold: 10240,
    //           minRatio: 0.8
    //         })]
    //     }
    // }
}