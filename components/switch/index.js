import FMSwitch from './src/index.vue';

FMSwitch.install = function (Vue) {
    Vue.component(FMSwitch.name, FMSwitch);
};

export default FMSwitch;
