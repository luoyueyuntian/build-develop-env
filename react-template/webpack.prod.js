const path = require('path')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.common')

process.env.NODE_ENV = 'production';

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/webapp"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'To Do List',
			template: './src/index.html',
            favicon: '',
            meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
        })
    ]
})