const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: {
        app: './src/main.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack starter',
            favicon: path.resolve(__dirname, '../public/favicon.ico'),
            template: path.resolve(__dirname, '../public/index.html'),
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new MiniCssExtractPlugin(),
        new ESLintPlugin(),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [{
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }, {
            test: /\.(png|jpe?g|webp|git|svg|)$/i,
            type: 'asset/resource',
        }, {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread'],
                },
            },
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
        }],
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