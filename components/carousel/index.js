import FMCarousel from './src/index.vue';

FMCarousel.install = function (Vue) {
    Vue.component(FMCarousel.name, FMCarousel);
};

export default FMCarousel;
