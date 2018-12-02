const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/app.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: ["awesome-typescript-loader"],
            }
        ],
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 1600,
        host: "0.0.0.0"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    }
}