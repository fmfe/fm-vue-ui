import FMButton from './src/index.vue';

FMButton.install = function (Vue) {
    Vue.component(FMButton.name, FMButton);
};

export default FMButton;
