import { createTinyDOM, css } from 'tiny-dom-helpers';

// https://cn.vuejs.org/v2/guide/transitions.html#可复用的过渡
const hooks = {
    // 进入时
    beforeEnter (el) {
        const dom = createTinyDOM(el);
        dom.addClass('fm-collapse-enter-transition');
        if (!el.dataset) {
            el.dataset = {};
        }
        el.dataset.oldPaddingTop = css(el, 'padding-top', null);
        el.dataset.oldPaddingBottom = css(el, 'padding-bottom', null);
        dom.attr('style', 'height: 0; padding-top: 0; padding-bottom: 0');
    },

    enter (el, done) {
        el.dataset.oldOverflow = css(el, 'overflow', null);
        const dom = createTinyDOM(el);
        if (el.scrollHeight !== 0) {
            dom.attr('style', `overflow: hidden; height: ${el.scrollHeight}px; padding-top: ${el.dataset.oldPaddingTop}; padding-bottom: ${el.dataset.oldPaddingBottom}`);
        } else {
            dom.attr('style', `overflow: hidden; height: ''; padding-top: ${el.dataset.oldPaddingTop}; padding-bottom: ${el.dataset.oldPaddingBottom}`);
        }
    },

    afterEnter (el) {
        const dom = createTinyDOM(el);
        dom.removeClass('fm-collapse-enter-transition');
        el.style.height = 0;
        el.style.overflow = el.dataset.oldOverflow;
    },

    // 离开时
    beforeLeave (el) {
        if (!el.dataset) {
            el.dataset = {};
        };
        const dom = createTinyDOM(el);
        dom.addClass('fm-collapse-leave-transition');
        el.dataset.oldPaddingTop = css(el, 'padding-top', null);
        el.dataset.oldPaddingBottom = css(el, 'padding-bottom', null);
        el.dataset.oldOverflow = css(el, 'overflow', null);

        dom.attr('style', `overflow: hidden; height: ${el.scrollHeight}px`);
    },

    leave (el) {
        const dom = createTinyDOM(el);
        if (el.scrollHeight !== 0) {
            dom.addClass('fm-collapse-leave-transition');
            dom.attr('style', `overflow: hidden; height: 0; padding-top: 0; padding-bottom: 0`);
        }
    },

    afterLeave (el) {
        const dom = createTinyDOM(el);
        dom.removeClass('fm-collapse-leave-transition');
        dom.attr('style', `overflow: ${el.dataset.oldOverflow}; height: 0; padding-top: ${el.dataset.oldPaddingTop}; padding-bottom: ${el.dataset.oldPaddingBottom}`);
    }
};

export default {
    name: 'fm-collapse-transition',
    functional: true,
    render (h, { children }) {
        const data = {
            on: hooks,
            props: {
                mode: 'out-in'
            }
        };
        return h('transition', data, children);
    }
};
