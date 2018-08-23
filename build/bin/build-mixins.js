const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;
const babel = require('babel-core');

const mixinsPath = path.resolve(__dirname, '../../src/mixins/');
const outputPath = path.resolve(__dirname, '../../lib/mixins/');

const filesList = fs.readdirSync(mixinsPath);

function dirExist (path) {
    try {
        fs.accessSync(path, fs.F_OK);
    } catch (e) {
        return false;
    }
    return true;
}

function transformFile (filename, name, cb) {
    babel.transformFile(path.resolve(mixinsPath, filename), {
        plugins: [['replace-import-path', {
            src: 'fm-vue-ui/src/locale/index.js',
            dest: '@fmfe/fm-vue-ui/lib/locale/index.js'
        }], 'add-module-exports', 'transform-es2015-modules-commonjs'],
        moduleId: name
    }, cb);
}

filesList.forEach(file => {
    const name = path.basename(file, '.js');
    transformFile(file, name, (err, result) => {
        if (err) {
            console.log('write failed', err);
        } else {
            if (!dirExist(path.resolve(__dirname, '../../lib'))) {
                exec('mkdir lib');
            }
            if (!dirExist(path.resolve(__dirname, '../../lib/mixins'))) {
                exec('mkdir lib/mixins');
            }

            const code = result.code;
            fs.writeFileSync(path.resolve(outputPath, file), code);
        }
    });
});
