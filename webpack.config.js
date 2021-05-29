const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

/**
 * @type {webpack.Configuration}
 */

const config = {
    output: {
        path: resolve(__dirname, "dist"),
        // filename: "[name].bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    devtool: "source-map",
    devServer: {
        port: 4200,
        contentBase: [
            resolve(__dirname, "src"),
            resolve(__dirname, "dist"),
            resolve(__dirname, "public"),
        ],
        watchContentBase: true,
        inline: true,
        hot: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "public", "index.html"),
        }),
        new MiniCSSExtractPlugin(),
    ],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: /\.(s?)css$/,
                exclude: /node_modules/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    require.resolve("css-loader"),
                    require.resolve("sass-loader"),
                ],
            },
        ],
    },
};

module.exports = config;
