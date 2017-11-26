const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HappyPack = require('happypack');

const md = require('markdown-it')();
const slugify = require('transliteration').slugify;
const stripTags = require('strip-tags');

const getHappyPackConfig = require('./happypack');

const config = require('../config');

const env = process.env.NODE_ENV || 'development';

console.log('---------env------:', env);

function wrap (render) {
    return function () {
        return render.apply(this, arguments)
            .replace('<code v-pre class="', '<code class="hljs ')
            .replace('<code>', '<code class="hljs">');
    };
};

function convert (str) {
    str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
        return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
    });
    return str;
};

module.exports = {
    context: path.resolve(__dirname, '../docs'),
    module: {
        noParse: [/static|assets/],
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'happypack/loader?id=vue'
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['happypack/loader?id=js']
            },
            {
                test: /\.md$/,
                loader: 'vue-markdown-loader',
                options: {
                    use: [
                        [require('markdown-it-anchor'), {
                            level: 2,
                            slugify: slugify,
                            permalink: true,
                            permalinkBefore: true
                        }],
                        [require('markdown-it-container'), 'demo', {
                            validate: function (params) {
                                return params.trim().match(/^demo\s*(.*)$/);
                            },
                            render: function (tokens, idx) {
                                const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);

                                if (tokens[idx].nesting === 1) {
                                    const description = (m && m.length > 1) ? m[1] : '';
                                    const content = tokens[idx + 1].content;
                                    const html = convert(stripTags(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
                                    const descriptionHTML = description ? md.render(description) : '';

                                    return `<docs-demo-block> 
                                                <div class="source" slot="source">${html}</div>
                                                ${descriptionHTML}`;
                                } else {
                                    return '</docs-demo-block>\n';
                                }
                            }
                        }]
                    ],
                    preprocess: function (markdownIt, source) {
                        /* eslint-disable camelcase */
                        markdownIt.renderer.rules.table_open = function () {
                            return '<table class="table">';
                        };
                        markdownIt.renderer.rules.fence = wrap(markdownIt.renderer.rules.fence);
                        return source;
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[ext]?[hash:8]'
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[ext]?[hash:8]'
                    }
                }]
            }
        ]
    },

    resolve: {
        extensions: ['.vue', '.js', '.md'],
        modules: [path.join(__dirname, '../node_modules')],
        alias: {
            '@docs': path.resolve(__dirname, '../docs'),
            'main': path.resolve(__dirname, '../src'),
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    resolveLoader: {
        modules: [path.join(__dirname, '../node_modules')]
    },

    performance: {
        hints: false
    },

    plugins: [
        // copy assets
        // new CopyWebpackPlugin([
        //     { context: '../docs', from: 'assets/**/*', to: path.resolve(__dirname, '../docs/dist'), force: true }
        // ]),

        new HappyPack(getHappyPackConfig({
            id: 'vue',
            loaders: [{
                path: 'vue-loader'
                // query: {
                //     // https://github.com/vuejs/vue-loader/issues/863
                //     esModule: false
                // }
            }]
        })),

        new HappyPack(getHappyPackConfig({
            id: 'js',
            loaders: ['babel-loader']
        })),

        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: 'tpl.html',
            filename: 'index.html',
            inject: true,
            env: process.env.NODE_ENV,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false
            }
        })
    ]
};
