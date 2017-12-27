<template>
    <label class="fm-checkbox" :class="{
            'is-checked': isChecked,
            'is-disabled': isDisabled
        }">
        <span :class="[
            'fm-checkbox-input',
            size ? 'fm-checkbox-' + size : 'fm-checkbox-small',
            {
                'is-checked': isChecked,
                'is-disabled': isDisabled
            }
        ]">
            <span class="fm-checkbox-inner"></span>
            <input  type="checkbox" 
                    v-model="model" 
                    :value="label"
                    :name="name"
                    class="fm-checkbox-original"
                    :disabled="isDisabled" 
                    @change="handleChange">
        </span>
        <span class="fm-checkbox-label" v-if="label || $slots.default">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'fm-checkbox',
        props: {
            value: {},
            label: {},
            name: String,
            size: {
                type: String,
                default: 'small',
                validator: (val) => ['large', 'medium', 'small'].indexOf(val) > -1
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },

        data () {
            return {
                selfModel: false
            };
        },

        computed: {
            model: {
                get () {
                    return this.value ? this.value : this.selfModel;
                },

                set (val) {
                    this.$emit('input', val);
                    this.selfModel = val;
                }
            },

            isChecked () {
                if ({}.toString.call(this.model) === '[object Boolean]') {
                    return this.model;
                }
            },

            isDisabled () {
                return this.disabled;
            }
        },

        methods: {
            handleChange (e) {
                this.$emit('change', e.target.value, e);
            }
        }
    };
</script>
