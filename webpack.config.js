const ExtractTextPlugin = require('extract-text-webpack-plugin');

// NOTE: we still need to add minification and uglification to webpack but we can do that before deploying for testing on mobile...
module.exports = {
    entry: './src/js/entry.js',
    output: {
        filename: './dist/js/[name].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            // NOTE: process our .js files to enable ES6/7 features
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            // NOTE: process our .scss files to enable .css conversions
            {
               test: /\.scss$/,
               loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        // NOTE: get our processed sass and stream it to this file
        new ExtractTextPlugin('./dist/css/style.css', {
            allChunks: true
        })
    ]
};
