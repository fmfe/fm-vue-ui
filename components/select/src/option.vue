<template>
    <li :class="['fm-select-option', {
        'hover': hover,
        'selected': curSelected === value
    }]" :value="curValue"
        @click.stop="selectOptionClick"
        @mouseleave="leaveItem" 
        @mouseenter="hoverItem">
        {{curLabel}}
    </li>
</template>

<script>
    export default {
        name: 'fm-option',
        inject: ['select'],
        props: {
            value: {
                type: [String, Number],
                required: true
            },
            label: [String, Number]
        },

        data () {
            return {
                hover: false,
                isSelected: false
            };
        },

        computed: {
            curLabel () {
                return this.label || this.value;
            },

            curValue () {
                return this.value || this.label;
            },

            curSelected () {
                return this.select.selfModel;
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

        created () {
            this.select.options.push(this);
        }
    };
</script>