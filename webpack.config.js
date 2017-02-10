const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: './dist/js/[name].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
               test: /\.scss$/,
               loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./dist/css/style.css', {
            allChunks: true
        })
    ],
    node: {
      fs: "empty"
    }
};
