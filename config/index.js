const path = require('path');

module.exports = {
    dev: {
        env: 'development',
        assetsRoot: path.resolve(__dirname, '../docs/dist'),
        assetsPublicPath: '/dist/',
        contentBase: path.resolve(__dirname, '../docs/dist'),
        port: 3000
    },
    build: {
        env: 'production',
        assetsRoot: path.resolve(__dirname, '../docs/dist'),
        assetsPublicPath: '/dist/'
    }
};
