import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en-US.json';
import cn from './zh-CN.json';

Vue.use(VueI18n);

export default new VueI18n({
    locale: 'zh-CN',
    fallbackLocale: 'zh-CN',
    messages: {
        'en-US': en,
        'zh-CN': cn
    }
});
