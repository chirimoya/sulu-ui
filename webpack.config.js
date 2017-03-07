/* eslint-disable flowtype/require-valid-file-annotation */
module.exports = { // eslint-disable-line
    entry: './index.js',
    output: {
        path: 'lib',
        filename: 'index.js',
        library: '@sulu/sulu-ui',
        libraryTarget: 'umd',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    externals: {
        react: 'react',
    },
};
