const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        host: '0.0.0.0',
        port: '23333',
        open: 'Google Chrome',
        compress: true,
        writeToDisk: true,
        historyApiFallback: true,
    },
});