const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;
const babel = require('babel-core');

const localePath = path.resolve(__dirname, '../../src/locale');
const outputPath = path.resolve(__dirname, '../../lib/locale');
const filesList = fs.readdirSync(localePath);

function dirExist (path) {
    try {
        fs.accessSync(path, fs.F_OK);
    } catch (e) {
        return false;
    }
    return true;
}

function copyFiles () {
    if (!dirExist(path.resolve(__dirname, '../../lib'))) {
        exec('mkdir lib');
    }

    if (!dirExist(path.resolve(__dirname, '../../lib/locale'))) {
        exec('mkdir lib/locale');
    }

    exec('cp -rf ./src/locale/lang ./lib/locale/lang');
}

copyFiles();

function transformFile (filename, name, cb) {
    babel.transformFile(path.resolve(localePath, filename), {
        plugins: ['add-module-exports', 'transform-es2015-modules-commonjs'],
        moduleId: name
    }, cb);
}

filesList.forEach(file => {
    const name = path.basename(file, '.js');
    if (fs.lstatSync(path.resolve(localePath, file)).isDirectory()) {
        return;
    }
    transformFile(file, name, (err, result) => {
        if (err) {
            console.log('write failed', err);
        } else {
            const code = result.code;
            fs.writeFileSync(path.resolve(outputPath, file), code);
        }
    });
});
