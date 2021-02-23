const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader-v16');
const webpack = require('webpack');
module.exports = {
    entry: {
        app: './src/main.ts',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts', 'tsx'],
        alias: {
            '@': path.resolve('src'),
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false,
            'process.env.BASE_URL': JSON.stringify(path.resolve(__dirname, '/')),

        }),
        new HtmlWebpackPlugin({
            title: 'vue starter v3',
            favicon: path.resolve(__dirname, '../public/favicon.ico'),
            template: path.resolve(__dirname, '../public/index.html'),
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [{
            test: /\.css$/i,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: false,
                },
            }, 'css-loader'],
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
            loader: 'vue-loader-v16'
        }, {
            test: /\.tsx?$/,
            use: [{
                loader: "ts-loader",
                options: { appendTsSuffixTo: [/\.vue$/] }
            }],
            exclude: /node_modules/,
        },],
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