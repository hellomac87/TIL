const path = require('path');

module.exports = {
    entry: './src/js/entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src/js')
            ],
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                    // babel 7: presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devtool: 'source-map',
    mode: 'development'
};