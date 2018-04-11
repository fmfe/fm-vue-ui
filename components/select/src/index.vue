<template>
    <div class="fm-select" :class="{'is-disabled': disabled}" ref="wrap">
        <span ref="trigger" class="fm-selected-trigger" @click="handleTriggerClick">{{label ? label : _placeholder}}</span>
        <i :class="['fm-select-icon', { 'active': shown }]" @click="handleTriggerClick"></i>
        <transition name="fm-zoom-in-top" @before-enter="handleListEnter">
            <div class="fm-selectable-list-wrap" ref="panel" v-show="shown" :style="{top: top + 'px'}">
                <ul class="fm-selectable-list">
                    <slot></slot>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'fm-select',
        provide () {
            return {
                'select': this
            };
        },
        props: {
            value: {
                type: [String, Number, Boolean]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: '' 
            },

            /* 用于计算 top 值时的额外偏移量 */
            offsetTop: {
                type: Number,
                default: 0
            }
        },

        data () {
            return {
                shown: false,
                options: [],
                label: '',
                val: '',

                wrapRect: null,
                top: 32
            };
        },

        watch: {
            value (val) {
                this.setDef();
            },

            options (val) {
                this.setDef();
            } 
        },

        computed: {
            _placeholder () {
                return this.placeholder ? this.placeholder : window.__vueI18n.t('fmselect.placeholder');
            }
        },

        methods: {
            setDef () {
                if (this.value) {
                    const option = this.options.filter(opt => opt.value === this.value);
                    this.label = option[0] ? option[0].label : '';
                    this.val = option[0] ? option[0].value : '';
                }
            },

            contains (root, target) {
                // root 节点是否包含 target 节点
                const isElement = Object.prototype.toString.call(root).includes('Element') && Object.prototype.toString.call(target).includes('Element');
                if (!isElement) {
                    return false;
                }
                let node = target;
                while (node) {
                    if (node === root) {
                        return true;
                    }
                    node = node.parentNode;
                }
                return false;
            },

            handleTriggerClick () {
                if (this.disabled) {
                    return;
                }
                this.shown = !this.shown;
            },

            handleDocClick (e) {
                const target = e.target;
                if (!this.contains(this.$el, target) && this.shown) {
                    this.shown = false;
                }
            },

            getPanelPosition () {
                const panelHeight = parseInt(window.getComputedStyle(this.$refs.panel, null).getPropertyValue('height'));
                const { height, top } = this.wrapRect;
                const panelDefTop = height + top;

                const docHeight = document.documentElement.clientHeight;
                const docWidth = document.documentElement.clientWidth;

                const topDiff = docHeight - panelDefTop;
                if (topDiff < panelHeight) {
                    if (top > panelHeight) {
                        return {
                            top: -(panelHeight + 10),
                            isMinusOffsetTop: true
                        };
                    } else {
                        // topDiff - panelHeight
                        // 偏移到上边界
                        return {
                            top: -panelHeight,
                            isMinusOffsetTop: false
                        };
                    }
                } else {
                    return {
                        top: height,
                        isMinusOffsetTop: false
                    };
                }
            },

            setPanelPosition () {
                const { top, isMinusOffsetTop } = this.getPanelPosition();
                this.top = isMinusOffsetTop ? top - this.offsetTop : top;
            },

            handleDocResize (e) {
                if (!this.shown) {
                    return;
                }
                this.wrapRect = this.$refs.wrap.getBoundingClientRect();
                this.$nextTick(() => {
                    this.setPanelPosition();
                });
            },

            setSelectedValue (option) {
                this.label = option.label;
                this.val = option.curValue;
                this.$emit('input', option.curValue);
                this.shown = false;
                this.$emit('change', option.curValue);
            },

            scrollToSelectedOption () {
                const seletedOption = this.options.filter(option => option.value === this.val);
                if (seletedOption.length) {
                    const target = seletedOption[0].$el;
                    const container = this.$el.querySelector('.fm-selectable-list');

                    // refrence: https://github.com/ElemeFE/element/blob/dev/src/utils/scroll-into-view.js
                    const top = target.offsetTop;
                    const bottom = target.offsetTop + target.offsetHeight;
                    const viewRectTop = container.scrollTop;
                    const viewRectBottom = viewRectTop + container.clientHeight;

                    if (top < viewRectTop) {
                        container.scrollTop = top;
                    } else if (bottom > viewRectBottom) {
                        container.scrollTop = bottom - container.clientHeight;
                    }
                }
            },

            handleListEnter () {
                this.wrapRect = this.$refs.wrap.getBoundingClientRect();
                this.$nextTick(() => {
                    this.setPanelPosition();
                    this.scrollToSelectedOption();
                });
            }
        },

        mounted () {
            window.document.addEventListener('click', this.handleDocClick, false);
            window.document.addEventListener('scroll', this.handleDocResize, false);
            window.addEventListener('resize', this.handleDocResize, false);
            this.$nextTick(() => {
                this.setDef();
            });
        },

        beforeDestroy () {
            window.document.removeEventListener('click', this.handleDocClick);
            window.document.removeEventListener('scroll', this.handleDocResize, false);
            window.removeEventListener('resize', this.handleDocResize, false);
        }
    };
</script>
