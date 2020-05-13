const path = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.common')

process.env.NODE_ENV = 'development';

console.log('开发环境')
module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        index: './src/index.html',
        hot: true,
        open: true,
        openPage: 'home',
        historyApiFallback: true,
        port: 8800
    },
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'To Do List',
            favicon: '',
            meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            template: path.resolve('./src/index.html')
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})