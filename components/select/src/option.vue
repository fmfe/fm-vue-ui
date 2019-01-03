<template>
    <li :class="['fm-select-option', {
        'hover': hover,
        'selected': curSelected === value
    }]" :value="value"
        @click.stop="selectOptionClick"
        @mouseleave="leaveItem"
        @mouseenter="hoverItem">
        {{label || value}}
        <i v-if="curSelected === value" class="icon-selected  icon-check_24px"></i>
    </li>
</template>

<script>
    export default {
        name: 'fm-option',
        inject: ['select'],
        props: {
            value: {
                type: [String, Number, Boolean],
                required: true
            },
            label: [String, Number]
        },

        data () {
            return {
                hover: false
            };
        },

        computed: {
            curSelected () {
                return this.select.val;
            }
        },

        methods: {
            leaveItem () {
                this.hover = false;
            },

            hoverItem () {
                this.hover = true;
            },

            selectOptionClick () {
                this.select.setSelectedValue(this);
            }
        },

        mounted () {
            this.select.options.push(this);
        }
    };
</script>
