const nodeExternals = require('webpack-node-externals');
const path = require('path');
const fs = require('fs');

const Components = require('../components.json');
// const utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
const mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));

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

externals['fm-vue-ui/src/locale'] = '@fmfe/fm-vue-ui/lib/locale';
externals[`fm-vue-ui/src/utils`] = `@fmfe/fm-vue-ui/lib/utils`;

// utilsList.forEach(file => {
//     file = path.basename(file, '.js');
//     externals[`fm-vue-ui/src/utils/${file}`] = `fm-vue-ui/lib/utils/${file}`;
// });

mixinsList.forEach(file => {
    file = path.basename(file, '.js');
    externals[`fm-vue-ui/src/mixins/${file}`] = `@fmfe/fm-vue-ui/lib/mixins/${file}`;
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

module.exports = {
    alias,
    externals
};
