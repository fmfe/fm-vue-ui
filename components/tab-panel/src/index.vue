<template>
    <div class="fm-tab-panel" v-show="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'fm-tab-panel',
        props: {
            value: {
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
                return this.tabs.activePanel === this.value;
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