const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.wasm$/,
                type: "webassembly/experimental"
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.wasm']
    },

};