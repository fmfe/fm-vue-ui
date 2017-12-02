const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;

const i18nPath = path.resolve(__dirname, '../../src/locale/i18n.js');
const outputPath = path.resolve(__dirname, '../../lib/locale/i18n.js');

function dirExist (path) {
    try {
        fs.accessSync(path, fs.F_OK);
    } catch (e) {
        return false;
    }
    return true;
}

function writeFile (err, result) {
    if (err) {
        console.log('write failed', err);
    } else {
        if (!dirExist(path.resolve(__dirname, '../../lib'))) {
            exec('mkdir lib');
        }

        if (!dirExist(path.resolve(__dirname, '../../lib/locale'))) {
            exec('mkdir lib/locale');
        }

        exec('cp -rf ./src/locale/ ./lib/locale/');
        const code = result.code;
        fs.writeFileSync(outputPath, code);
    }
}

require('babel-core').transformFile(i18nPath, {
    plugins: ['transform-es2015-modules-commonjs'],
    moduleId: 'i18n'
}, writeFile);
