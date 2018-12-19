const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const path = require('path');
const config = {
    //inform webpack that we're building a bundle 
    //for nodeJS, rather than for browser
    entry: './src/client/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
}

module.exports = merge(baseConfig, config)