const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => ({
    entry: {
        main: './src/index.tsx'
    },
    mode: "development",
    output: {
        path: path.join(__dirname, "build/"),
        filename: '[name].[hash:8].js',
        chunkFilename: '[id].[hash:8].js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.ts', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/
            },
            {
                test: /\.scss?$/, use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        port: 3000
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/
                }
            }
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true
            })
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html', favicon: "./public/favicon.ico" })
    ]
});