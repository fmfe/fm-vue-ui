import FMSwiper from './src/index.vue';

FMSwiper.install = function (Vue) {
    Vue.component(FMSwiper.name, FMSwiper);
};

export default FMSwiper;
