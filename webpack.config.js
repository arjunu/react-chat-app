const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = './src/client/index.js';// the entry point of our app'

const main = process.env.NODE_ENV === "production" ? [
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        `webpack-dev-server/client?http://localhost:5000`,
        entry
    ] : [entry];

module.exports = {
    entry: {
        main,
        vendor: [
            'immutable',
            'react-dom',
            'react-redux',
            'react',
            'redux',
        ],
    },
    output: {
        path: __dirname + `/public`,
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: [/styles.css/],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },

                    },
                ]
            },
            {
                test: [/styles.css/],
                use: [
                    'style-loader',
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules', path.join(__dirname, "src/client")],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'] // Specify the common bundle's name.
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true // Inject all files that are generated by webpack, e.g. bundle.js
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            }
        })
    ],
};

