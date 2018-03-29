/* Automatic generated by './build/build-entry.js' */

import utils from './utils/index';

import Button from '../components/button/index.js';
import Dialog from '../components/dialog/index.js';
import Loading from '../components/loading/index.js';
import Collapse from '../components/collapse/index.js';
import CollapseItem from '../components/collapse-item/index.js';
import Tabs from '../components/tabs/index.js';
import TabPanel from '../components/tab-panel/index.js';
import Rate from '../components/rate/index.js';
import Carousel from '../components/carousel/index.js';
import Input from '../components/input/index.js';
import Checkbox from '../components/checkbox/index.js';
import Radio from '../components/radio/index.js';
import Switch from '../components/switch/index.js';
import Option from '../components/option/index.js';
import Select from '../components/select/index.js';

const components = [
    Button,
    Loading,
    Collapse,
    CollapseItem,
    Tabs,
    TabPanel,
    Rate,
    Carousel,
    Input,
    Checkbox,
    Radio,
    Switch,
    Option,
    Select
];

const install = function (Vue, opts = {}) {
    if (install.installed) return;

    components.map(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$fmdialog = Dialog;
    Vue.prototype.$fmutils = utils;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export {
    Button,
    Dialog,
    Loading,
    Collapse,
    CollapseItem,
    Tabs,
    TabPanel,
    Rate,
    Carousel,
    Input,
    Checkbox,
    Radio,
    Switch,
    Option,
    Select
};

export default {
    version: '1.1.6',
    install,
    Button,
    Dialog,
    Loading,
    Collapse,
    CollapseItem,
    Tabs,
    TabPanel,
    Rate,
    Carousel,
    Input,
    Checkbox,
    Radio,
    Switch,
    Option,
    Select
};

