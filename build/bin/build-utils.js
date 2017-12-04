const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;

const utilsPath = path.resolve(__dirname, '../../src/utils/');
const outputPath = path.resolve(__dirname, '../../lib/utils/');

const filesList = fs.readdirSync(utilsPath);

function dirExist (path) {
    try {
        fs.accessSync(path, fs.F_OK);
    } catch (e) {
        return false;
    }
    return true;
}

function transformFile (filename, name, cb) {
    require('babel-core').transformFile(path.resolve(utilsPath, filename), {
        plugins: ['transform-es2015-modules-commonjs'],
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
            if (!dirExist(path.resolve(__dirname, '../../lib/utils'))) {
                exec('mkdir lib/utils');
            }

            const code = result.code;
            fs.writeFileSync(path.resolve(outputPath, file), code);
        }
    });
});
