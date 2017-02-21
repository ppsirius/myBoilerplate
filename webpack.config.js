var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/main.entry.js'),
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: "main.bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [ 'es2015', { modules: false } ]
                    ]
                }
            }
        ]
    }
};
