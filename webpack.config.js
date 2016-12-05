/**
 * Created by sgdn001 on 12/5/2016.
 */
var webpack = require('webpack')

module.exports = {
    entry: ['./src/index.js'],

    output: {
        path: 'public',
        filename: 'bundle.js',
        publicPath: '/'
    },

    devServer: {
        port: 9000,
        inline: true,
        historyApiFallback: true,
        contentBase: "public/"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },

    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : [],
};