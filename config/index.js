const path = require('path');

module.exports = {
    dev: {
        env: 'development',
        assetsRoot: path.resolve(__dirname, '../sites/dist'),
        assetsPublicPath: '/sites',
        contentBase: path.resolve(__dirname, '../sites/dist'),
        port: 3000
    },
    build: {
        env: 'production',
        assetsRoot: path.resolve(__dirname, '../sites'),
        assetsPublicPath: '/sites'
    }
};
