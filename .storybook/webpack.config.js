const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = async ({ config }) => {
    // @see https://github.com/storybooks/storybook/issues/5872
    config.performance.hints = false;

    config.module.rules.push({
        test: [
            /\.css$/,
            /\.(sa|sc)ss$/,
        ],
        exclude: /[\\/]node_modules[\\/]/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
        ],
    });

    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        })
    );

    return config;
};
