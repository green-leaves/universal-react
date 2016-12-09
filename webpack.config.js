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
            },
            //{ test: /bootstrap.+\.(jsx|js)$/, loader: 'import?jQuery=jquery,$=jquery,this=>window' },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },

    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : [],
};