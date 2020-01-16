import Vue from 'vue';
import FMDialog from './index.vue';

const DialogConstructor = Vue.extend(FMDialog);

let instance = null;

DialogConstructor.prototype.remove = function () {
    this.shown = false;
    if (this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
    }
    instance = null;
};

const getAnInstance = (props) => {
    if (instance) {
        return instance;
    }
    return new DialogConstructor({
        propsData: props,
        el: document.createElement('div')
    });
};

const Dialog = function (opts) {
    if (Vue.prototype.$isServer) {
        return;
    }

    if (typeof opts === 'string') {
        opts = {
            message: opts
        };
    }

    if (typeof opts.onCancel === 'function') {
        const cancel = opts.onCancel;
        opts.onCancel = () => {
            instance.remove();
            cancel();
        };
    } else {
        opts.onCancel = () => {
            instance.remove();
        };
    }

    if (typeof opts.onConfirm === 'function') {
        const confirm = opts.onConfirm;
        opts.onConfirm = () => {
            instance.remove();
            confirm();
        };
    } else {
        opts.onConfirm = () => {
            instance.remove();
        };
    }

    if (typeof opts.onClose === 'function') {
        const close = opts.onClose;
        opts.onClose = () => {
            instance.remove();
            close();
        };
    } else {
        opts.onClose = () => {};
    }

    instance = getAnInstance(opts);
    document.body.appendChild(instance.$el);
    instance.shown = true;

    // 自动销毁
    if (instance.validType) {
        setTimeout(() => {
            instance && instance.remove();
        }, instance.duration);
    }
};

export default Dialog;
