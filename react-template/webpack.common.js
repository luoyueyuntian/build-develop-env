const path = require('path')

module.exports = {
    entry: path.resolve('./src/index.js'),
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }, {
                    loader: 'less-loader'
                }]
            },
            { test: /\.ts$/, use: 'ts-loader' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [require.resolve('babel-preset-react-app')]
                    }
                }, {
                    loader: 'eslint-loader'
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            name: 'common',
            minSize: 0,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 6,
            maxInitialRequests: 4,
            automaticNameDelimiter: '~'
        }
    }
}