const fs = require('fs');
const path = require('path');
const Components = require('../../components.json');

const allKeys = Object.keys(Components);
const basepath = path.resolve(__dirname, '../../theme-default/');

function fileExists (filePath) {
    try {
        return fs.statSync(filePath).isFile();
    } catch (err) {
        return false;
    }
}

let indexContent = '@import "./base.less";\n';

allKeys.forEach(key => {
    const fileName = `${key}.less`;
    indexContent += '@import "./' + fileName + '";\n';

    const filePath = path.resolve(basepath, 'src', fileName);
    if (!fileExists(filePath)) {
        fs.writeFileSync(filePath, '', 'utf8');
        console.log('创建遗漏的 ', fileName, ' 文件');
    }
});

fs.writeFileSync(path.resolve(basepath, 'src', 'index.less'), indexContent);
