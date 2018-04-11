import locale from 'fm-vue-ui/src/locale/index.js';

export default {
    computed: {
        $fl () {
            return locale.getLocale();
        }
    },

    methods: {
        $ft (...args) {
            return locale.t.apply(this, args);
        }
    }
};
