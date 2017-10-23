let path = require('path');

/* eslint-disable */
let isCI = process.env.CONTINUOUS_INTEGRATION ? true : false;

module.exports = config => {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [
            './index.js'
        ],
        browsers: [isCI ? 'ChromeTravisCI' : 'Chrome'],
        customLaunchers: {
            ChromeTravisCI: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-mocha-reporter',
            'karma-chai'
        ],
        reporters: ['progress', 'mocha', 'coverage'],
        singleRun: true,
        autoRun: true,
        mochaReporter: {
            colors: {
                success: 'blue',
                info: 'bgGreen',
                warning: 'cyan',
                error: 'bgRed'
            },
            symbols: {
                success: '+',
                info: '#',
                warning: '!',
                error: 'x'
            }
        },
        preprocessors: {
            './index.js': ['webpack', 'sourcemap']
        },
        logLevel: config.LOG_INFO,
        colors: true,
        webpack: {
            devtool: 'inline-source-map',
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    }
                ]
            },
            resolve: {
                extensions: ['.js'],
                modules: [path.join(__dirname, '../node_modules')]
            }
        },
        webpackMiddleware: {
            noInfo: true
        }
    });
};