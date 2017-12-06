import FMTabPanel from './src/index.vue';

FMTabPanel.install = function (Vue) {
    Vue.component(FMTabPanel.name, FMTabPanel);
};

export default FMTabPanel;
