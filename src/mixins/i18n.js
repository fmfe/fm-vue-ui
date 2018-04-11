import locale from 'main/locale/index.js';

export default {
    beforeCreate () {
        this.$ft = locale.t;
        this.$fl = locale.getLocale();
    }
};
