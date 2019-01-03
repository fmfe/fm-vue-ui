import Vue from 'vue';
import FMToast from './index.vue';

const ToastConstructor = Vue.extend(FMToast);

let instance = null;
let closeTimeoutEvent = null;

ToastConstructor.prototype.remove = function () {
    this.shown = false;
    if (this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
    }
    instance = null;
};

const getAnInstance = (props) => {
    if (instance) {
        instance.remove();
        instance = null;
        // return instance;
    }

    return new ToastConstructor({
        propsData: props,
        el: document.createElement('div')
    });
};

const Toast = function (opts) {
    if (Vue.prototype.$isServer) {
        return;
    }

    if (typeof opts === 'string') {
        opts = {
            message: opts
        };
    }

    if (typeof opts.onClose === 'function') {
        const close = opts.onClose;
        opts.onClose = () => {
            instance.remove();
            close();
        };
    } else {
        opts.onClose = () => {
            instance.remove();
            clearTimeout(closeTimeoutEvent);
        };
    }

    instance = getAnInstance(opts);
    document.body.appendChild(instance.$el);
    instance.shown = true;

    // 自动销毁
    if (instance.duration > 0) {
        clearTimeout(closeTimeoutEvent);
        closeTimeoutEvent = setTimeout(() => {
            instance && instance.remove();
        }, instance.duration);
    }
};

export default Toast;
