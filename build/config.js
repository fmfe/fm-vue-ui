const nodeExternals = require('webpack-node-externals');
const path = require('path');

const Components = require('../components.json');
const vueExternal = {
    'vue': {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
    }
};

let externals = {};

Object.keys(Components).forEach(function (key) {
    externals[`fm-vue-ui/components/${key}`] = `fm-vue-ui/lib/${key}`;
});

externals = [
    Object.assign({}, externals, vueExternal),
    nodeExternals()
];

const alias = {
    main: path.resolve(__dirname, '../src'),
    components: path.resolve(__dirname, '../components'),
    'fm-vue-ui': path.resolve(__dirname, '../')
};

export default {
    alias,
    externals
};
