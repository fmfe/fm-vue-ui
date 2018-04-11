<template>
    <div class="fm-tabs-wrap">
        <div class="fm-tabs-nav-list">
            <div :class="{
                    'fm-tabs-nav-item': true,
                    'fm-tabs-nav-card': type === 'card',
                    'fm-tabs-nav-panel': type === 'panel',
                    'active': panel.value === activePanel
                 }"
                 v-for="(panel, i) in panels"
                 @click="change(panel.value, $event)"
                 @mouseenter="mouseEnter(i, $event)"
                 @mouseleave="mouseLeave"
                 :key="i">
                 {{panel.label}}
                 <i class="fm-tab-delete-icon" v-if="closable && type === 'card' && enterTarget === i" @click.stop="deleteTab(panel.value, $event)"></i>
            </div>
        </div>
        <!-- fix #2 -->
        <slot name="outer"></slot>
        <div class="fm-tabs-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import { createTinyDOM } from 'tiny-dom-helpers';

    export default {
        name: 'fm-tabs',
        props: {
            type: {
                type: String,
                default: 'panel',
                validator: val => ['panel', 'card'].indexOf(val) > -1
            },
            closable: {
                type: Boolean,
                default: false
            },
            value: {
                type: [Number, String],
                default: 0
            }
        },
        provide () {
            return {
                tabs: this
            };
        },

        data () {
            return {
                activePanel: undefined,
                panels: [],
                enterTarget: -1
            };
        },

        watch: {
            value (val) {
                this.activePanel = this.initDefValue();
                this.$emit('input', this.activePanel);
            }
        },

        methods: {
            initDefValue () {
                // 验证 value 是否 valid
                const def = this.panels.filter(panel => panel.value === this.value);
                if (def[0]) {
                    return this.value;
                } else {
                    this.$emit('input', this.panels[0].value);
                    this.$emit('change', this.panels[0].value);
                    return this.panels[0].value;
                }
            },

            change (value, e) {
                this.activePanel = value;
                this.$emit('input', value);
                this.$emit('change', value, e);
            },

            deleteTab (value, e) {
                this.$emit('delete', value, e);
            },

            mouseEnter (index, e) {
                if (this.closable && this.type === 'card') {
                    this.enterTarget = index;
                }
            },

            mouseLeave (e) {
                if (this.closable && this.type === 'card') {
                    this.enterTarget = -1;
                }
            },

            addPanel (item) {
                this.panels.push(item);
            },

            removePanel (item) {
                const index = this.panels.indexOf(item);
                if (index > -1) {
                    this.panels.splice(index, 1);
                }
            }
        },

        mounted () {
            this.activePanel = this.initDefValue();
        }
    };
</script>
