module.exports = { // eslint-disable-line
    title: 'Sulu UI Style Guide',
    components: './components/*/*.js',
    webpackConfig: {
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: [
                        'transform-flow-strip-types',
                        'transform-class-properties'
                    ]
                }
            }]
        }
    }
};
