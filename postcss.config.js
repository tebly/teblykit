module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 2 versions', 'not ie <= 9', 'safari 7'],
        }),
    ],
};
