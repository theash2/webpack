const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: {
        'app': './src/index.js',
        'print': './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000
    },
    mode: "development",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "output manage"
        })
    ],
    output: {
        filename: '[name].bundle.js',//输出编译完的文件的名字
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        runtimeChunk: 'single', //多个入口时
    },
};