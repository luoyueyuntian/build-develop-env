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
        hot: true,
        open: true,
        historyApiFallback: true,
        port: 8800
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