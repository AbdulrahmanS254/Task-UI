const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");
const { Warning } = require("postcss");

module.exports = {
    entry: {
        app: "./src/index.js",
    },

    output: {
        path: __dirname + "/app",
        filename: "[name].js",
        publicPath: "/",
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
        }),

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: "assets/css/style.css",
        }),
    ],

    optimization: {
        minimizer: [new CssMinimizerPlugin()],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "app"),
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
