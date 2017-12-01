
import cn from './lang/zh-CN.json';
import en from './lang/en-US.json';

const supprtsLangs = ['zh-CN', 'en-US'];
let vueI18n;

function setI18n (i18n) {
    const lang = supprtsLangs.includes(i18n.locale) ? i18n.locale : 'zh-CN';
    if (i18n.vm) {
        i18n.mergeLocaleMessage(lang, lang === 'zh-CN' ? cn : en);
        vueI18n = i18n;
    } else {
        throw new Error('The instance of vue-i18n must be needed.');
    }
};

function getI18n (i18n) {
    return vueI18n;
};

export default {
    setI18n,
    getI18n
};
