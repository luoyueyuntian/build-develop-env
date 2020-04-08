const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.common')

process.env.NODE_ENV = 'production';

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'To Do List',
            favicon: '',
            meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
        }),
        new webpack.NamedModulesPlugin()
    ]
})