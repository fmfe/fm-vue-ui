<template>
    <div class="fm-tabs-wrap">
        <div class="fm-tabs-nav-list">
            <div :class="{
                    'fm-tabs-nav-item': true,
                    'fm-tabs-nav-card': type === 'card',
                    'fm-tabs-nav-panel': type === 'panel',
                    'active': panel.index === activePanel
                 }"
                 v-for="(panel, i) in panels"
                 @click="change(panel.index, $event)"
                 @mouseenter="mouseEnter(i, $event)"
                 @mouseleave="mouseLeave"
                 :key="i">
                 {{panel.label}}
                 <i class="fm-tab-delete-icon" v-if="closable && type === 'card' && enterTarget === i" @click.stop="deleteTab(panel.index, $event)"></i>
            </div>
        </div>
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
                activePanel: this.value,
                panels: [],
                enterTarget: -1
            };
        },

        watch: {
            value (val) {
                this.activePanel = val;
                this.$emit('input', val);
            }
        },

        methods: {
            change (value, e) {
                this.activePanel = value;
                this.$emit('input', value);
                this.$emit('tab-click', value, e);
            },

            deleteTab (index, e) {
                this.$emit('tab-delete', index, e);
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
            if (!this.activePanel) {
                this.activePanel = this.panels[0].index;
            }
        }
    };
</script>
