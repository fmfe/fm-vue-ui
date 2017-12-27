<template>
    <div class="fm-select" :class="{'is-disabled': disabled}">
        <span ref="trigger" class="fm-selected-trigger" @click.stop="handleClick">{{selected ? selected : _placeholder}}</span>
        <i :class="['fm-select-icon', { 'active': shown }]"></i>
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
                type: [String, Number]
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
                selected: '',
                listWrapStyle: {

                }
            };
        },

        computed: {
            _placeholder () {
                return this.placeholder ? this.placeholder : window.__vueI18n.t('select.placeholder');
            }
        },

        methods: {
            handleClick () {
                if (this.disabled) {
                    return;
                }
                this.shown = !this.shown;
            },

            handleDocClick () {
                if (this.shown) {
                    this.shown = false;
                }
            },

            setSelectedValue (option) {
                this.selected = option.curValue;
                this.$emit('input', this.selected);
                this.shown = false;
                this.$emit('change', this.selected);
            },

            scrollToSelectedOption () {
                const seletedOption = this.options.filter(option => option.curValue === this.selected);
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

        created () {
            if (this.value) {
                this.selected = this.value;
            }
        },

        mounted () {
            window.document.addEventListener('click', this.handleDocClick, false);
        },

        beforeDestroy () {
            window.document.removeEventListener('click', this.handleDocClick);
        }
    };
</script>
