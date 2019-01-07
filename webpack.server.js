const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals=require('webpack-node-externals');
const path = require('path');

const config = {
    //inform webpack that we're building a bundle 
    //for nodeJS, rather than for browser
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        
    },
    externals:[webpackNodeExternals()],
}
module.exports = merge(baseConfig, config)