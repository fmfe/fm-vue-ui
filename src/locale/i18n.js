
import cn from './lang/zh-CN.json';
import en from './lang/en-US.json';

const supprtsLangs = ['zh-CN', 'en-US'];
window.vueI18n = undefined;

function setI18n (i18n) {
    const lang = supprtsLangs.indexOf(i18n.locale) > -1 ? i18n.locale : 'zh-CN';
    if (i18n.vm) {
        i18n.mergeLocaleMessage(lang, lang === 'zh-CN' ? cn : en);
        window.__vueI18n = i18n;
    } else {
        throw new Error('The instance of vue-i18n must be needed.');
    }
};

export default {
    setI18n
};
