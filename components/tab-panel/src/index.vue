<template>
    <div class="fm-tab-panel" v-show="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'fm-tab-panel',
        props: {
            index: {
                type: [Number, String],
                required: true
            },
            label: {
                type: String,
                required: true
            }
        },
        inject: ['tabs'],

        data () {
            return {

            };
        },

        computed: {
            active () {
                return this.tabs.activePanel === this.index;
            }
        },

        mounted () {
            // this.tabs.panels.push({
            //     label: this.label,
            //     value: this.index
            // });
            this.tabs.addPanel(this);
        },

        destroyed () {
            if (this.$el && this.$el.parentNode) {
                this.$el.parentNode.removeChild(this.$el);
            }
            this.tabs.removePanel(this);
        }
    };
</script>