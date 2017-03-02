/* eslint-disable flowtype/require-valid-file-annotation */
const glob = require('glob');
const path = require('path');

module.exports = { // eslint-disable-line
    title: 'Sulu UI Style Guide',
    components: function() {
        const folders = glob.sync('./components/*');

        return folders.map((folder) => {
            const component = path.basename(folder);
            return path.join(folder, component + '.js');
        });
    },
    webpackConfig: {
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }],
        },
    },
};
