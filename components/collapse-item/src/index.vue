<template>
    <div class="fm-collapse-item">
        <div :class="['fm-collapse-item-header', isActive ? 'fm-collapse-item-active' : '']" @click="handleClickHeader">
            <span class="fm-collapse-item-title" v-text="title"></span>
            <span class="fm-collapse-item-info" v-text="info"></span>
            <span class="fm-collapse-item-act" @mouseover="handleOver" @mouseout="handleOut">
                {{ isActive ? actActiveText : actNotActiveText}}
                <i :class="[iconNotActiveClasses, isActive ? iconActiveClasses : '']"></i>
            </span>
        </div>
        <collapse-transition>
            <div class="fm-collapse-item-content" v-show="isActive">
                <slot></slot>
            </div>
        </collapse-transition>
    </div>
</template>

<script>
    import { createTinyDOM } from 'tiny-dom-helpers';
    import collapseTransition from './collapse-transition';

    export default {
        name: 'fm-collapse-item',
        props: {
            title: {
                type: String,
                default: ''
            },
            // header 中间部分的描述信息
            info: {
                type: String,
                default: ''
            },
            actText: {
                type: String,
                default: ''
            },
            iconClasses: {
                type: String,
                default: ''
            }
        },

        inject: ['collapse'],

        data () {
            return {
                isActive: false,
                height: 0
            };
        },

        computed: {
            actActiveText () {
                if (typeof this.actText === 'string') {
                    const texts = this.actText.split(' ');
                    return texts.length >= 2 ? texts[1] : texts[0];
                }

                return '';
            },
            actNotActiveText () {
                if (typeof this.actText === 'string') {
                    return this.actText.split(' ')[0];
                }

                return '';
            },
            iconActiveClasses () {
                if (this.iconClasses && typeof this.iconClasses === 'string') {
                    return this.iconClasses.split(' ').filter((item) => item.includes('active') && !item.includes('hover')).join(' ');
                }

                return '';
            },

            iconNotActiveClasses () {
                if (this.iconClasses && typeof this.iconClasses === 'string') {
                    return this.iconClasses.split(' ').filter((item) => !item.includes('active') && !item.includes('hover')).join(' ');
                }

                return '';
            }
        },

        methods: {
            handleOver (e) {
                if (!this.iconClasses || typeof this.iconClasses !== 'string') {
                    return;
                }
                const nodeName = e.target.nodeName.toLowerCase();
                if (nodeName === 'span') {
                    const dom = createTinyDOM(e.currentTarget.querySelector('i'));
                    let hoverClass = '';
                    if (this.isActive) {
                        hoverClass = this.iconClasses.split(' ').filter(item => item.includes('hover') && item.includes('active'))[0];
                    } else {
                        hoverClass = this.iconClasses.split(' ').filter(item => item.includes('hover') && !item.includes('active'))[0];
                    }
                    hoverClass && dom.addClass(hoverClass);
                }
            },

            handleOut (e) {
                if (!this.iconClasses || typeof this.iconClasses !== 'string') {
                    return;
                }
                const nodeName = e.target.nodeName.toLowerCase();
                if (nodeName === 'span') {
                    const dom = createTinyDOM(e.currentTarget.querySelector('i'));
                    let outClass = '';
                    if (this.isActive) {
                        outClass = dom.toArray().filter(item => item.includes('hover') && item.includes('active'))[0];
                    } else {
                        outClass = dom.toArray().filter(item => item.includes('hover') && !item.includes('active'))[0];
                    }
                    outClass && dom.removeClass(outClass);
                }
            },

            handleClickHeader (e) {
                let el = e.target;

                if (!this.collapse.accordion) {
                    this.collapse.$children.forEach((item) => item.isActive = false);
                }

                while (el && el.nodeName.toLowerCase() !== 'div') {
                    el = this.getParentElement(el);
                }
                if (!el) {
                    return;
                }

                if (el.className.includes('active')) {
                    el.className = 'fm-collapse-item-header';
                    // 手风琴模式下能隐藏自身
                    this.isActive = false;
                } else {
                    el.className += ' fm-collapse-item-active';
                    this.isActive = true;
                }
            },

            hideCollapseItem () {
                // this.$parent.$children.forEach((item) => item.isActive = false);
                this.isActive = false;
            },

            showCollapseItem () {
                this.isActive = true;
            },

            getPreviousElement (el) {
                if (el.previousElementSibling) {
                    return el.previousElementSibling;
                }

                while (el = el.previousSibling) {
                    if (el.nodeType === 1) {
                        return el;
                    }
                }
                return null;
            },

            getNextSiblingElement (el) {
                if (el.nextElementSibling) {
                    return el.nextElementSibling;
                }

                while (el = el.nextSibling) {
                    if (el.nodeType === 1) {
                        return el;
                    }
                }
                return null;
            },

            getParentElement (el) {
                return el.parentNode ? el.parentNode : null;
            }
        },
        components: {
            'collapse-transition': collapseTransition
        }
    };
</script>
