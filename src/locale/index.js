import cn from './lang/zh-CN.json';
import en from './lang/en-US.json';
import hk from './lang/zh-HK.json';

import Format from './format';

const language = {
    'zh-CN': cn,
    'en-US': en,
    'zh-HK': hk
};

const defaultLang = 'zh-CN';
const format = Format();
let locale = defaultLang;

// let i18nHandler = function i18nHandler () {
//     const vuei18n = Object.getPrototypeOf(this).$t;
//     if (typeof vuei18n === 'function') {
//         return vuei18n.apply(this, arguments);
//     }
// };

// function i18n (fn) {
//     i18nHandler = fn || i18nHandler;
// }

function t (path, options) {
    let value = false;
    const array = path.split('.');
    let current = language[locale] || language[defaultLang];
    for (var i = 0, j = array.length; i < j; i++) {
        const property = array[i];
        value = current[property];
        if (i === j - 1) return format(value, options);
        if (!value) return '';
        current = value;
    }
    return '';
}

function use (l) {
    locale = l || defaultLang;
}

function getLocale () {
    return locale;
}

export default { use, t, getLocale };
