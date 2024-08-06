const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        app: "./src/index.js",
        appAr: "./src/index-ar.js",
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[name][ext]",
                },
            },

            {
                test: /\.(mp4|webm|ogg)$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/vids/[name][ext]",
                },
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                exclude: /images/,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name][ext]",
                },
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            chunks: ["app"],
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            filename: "index-ar.html",
            template: "./src/index-ar.html",
            chunks: ["appAr"],
            inject: 'body',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
        }),
    ],

    optimization: {
        minimizer: [new CssMinimizerPlugin()],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9008,
        devMiddleware: {
            writeToDisk: true,
        },
        open: true,
        hot: false,
    },
};
