import Vue from 'vue';
import FMUI from 'main/index';

Vue.use(FMUI);

// 创建 vm 实例
export const createVM = (opts) => {
    return new Vue(opts).$mount();
};

// 销毁 vm 实例
export const destroyVM = (vm) => {
    vm.$destroy && vm.$destroy();
    vm.$el &&
    vm.$el.parentNode &&
    vm.$el.parentNode.removeChild(vm.$el);
};

/**
 * 创建组件测试实例
 * https://cn.vuejs.org/v2/guide/unit-testing.html#编写可被测试的组件
 */
export const createCompTest = (Component, propsData) => {
    const Ctor = Vue.extend(Component);
    const vm = new Ctor({ propsData: propsData }).$mount();
    return vm;
};
