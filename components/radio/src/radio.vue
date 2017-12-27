<template>
    <label :class="[
        'fm-radio',
        {
            'is-checked': model === label,
            'is-disabled': isDisabled
        }
    ]">
        <span :class="[
            'fm-radio-input',
            size ? 'fm-radio-' + size : 'fm-radio-small',
            {
                'is-checked': model === label,
                'is-disabled': isDisabled
            }
        ]">
            <span class="fm-radio-inner"></span>
            <input  type="radio" 
                    v-model="model" 
                    :value="label"
                    :name="name"
                    class="fm-radio-original"
                    :disabled="isDisabled" 
                    @change="handleChange">
        </span>
        <span class="fm-radio-label" v-if="label || $slots.default">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'fm-radio',
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
                selfModel: ''
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
