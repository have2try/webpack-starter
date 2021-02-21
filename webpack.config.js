const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        hot: true,
        open: true
    },
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack starter',
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }, ],
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },

};