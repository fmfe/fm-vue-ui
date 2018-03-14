<template>
    <div class="fm-select" :class="{'is-disabled': disabled}">
        <span ref="trigger" class="fm-selected-trigger" @click="handleTriggerClick">{{label ? label : _placeholder}}</span>
        <i :class="['fm-select-icon', { 'active': shown }]" @click="handleTriggerClick"></i>
        <transition name="fm-zoom-in-top" @before-enter="handleListEnter">
            <div class="fm-selectable-list-wrap" v-show="shown" :style="listWrapStyle">
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
            }
        },

        data () {
            return {
                shown: false,
                options: [],
                label: '',
                val: '',
                listWrapStyle: {

                }
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
                return this.placeholder ? this.placeholder : window.__vueI18n.t('select.placeholder');
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

            setSelectedValue (option) {
                this.label = option.label;
                this.val = option.curValue;
                this.$emit('input', option.curValue);
                this.shown = false;
                this.$emit('change', option.curValue);
            },

            scrollToSelectedOption () {
                const seletedOption = this.options.filter(option => option.curValue === this.val);
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
                this.$nextTick(() => this.scrollToSelectedOption());
            }
        },

        mounted () {
            window.document.addEventListener('click', this.handleDocClick, false);
            this.$nextTick(() => {
                this.setDef();
            });
        },

        beforeDestroy () {
            window.document.removeEventListener('click', this.handleDocClick);
        }
    };
</script>
