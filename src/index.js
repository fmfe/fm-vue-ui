/* Automatic generated by './build/build-entry.js' */

import Button from '../components/button/index.js';
import Dialog from '../components/dialog/index.js';

const components = [
    Button
];

const install = function (Vue, opts = {}) {
    if (install.installed) return;

    components.map(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$fmdialog = Dialog;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

module.exports = {
    version: '0.0.1',
    install,
    Button,
    Dialog
};
