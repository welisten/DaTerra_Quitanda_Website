const modoDev = process.env.NODE_ENV != 'production'
const path = require('path')
//  ----minimizers----
const terserPlugin = require('terser-webpack-plugin')
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
//  ----Plugins----
const miniCssExtractPlugin =  require('mini-css-extract-plugin')
const copyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/index.js',
    devServer: {
        static: {
            directory: path.join(__dirname + '/build')
        },
        compress: false,
        port:8080
    },
    optimization: {
        minimize: true,
        minimizer: [
            new terserPlugin({
                terserOptions: {
                    format: {
                        comments: false
                    }
                },
                extractComments: false
            }),
            new cssMinimizerWebpackPlugin()
        ] 
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/build'
    },
    plugins: [
        new miniCssExtractPlugin({filename: 'style.css'}),
        new copyPlugin({
            patterns:[
                {context: './src', from: '**/*.html'},
                {context: './src', from: 'imgs/**/*'}
            ]
        })
    ],
    module: {
        rules:[
            //         SASS e CSS
            {
                test: /\.s?[ac]ss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            //           IMAGES
            {
                test: /\.(png|svg|jpe?g|gif|webp)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}