<template>
    <div :class="[
        'fm-input',
        size ? 'fm-input-' + size : 'fm-input-medium',
        {
            'fm-input-disabled': disabled,
            'fm-input-group': $slots.prepend || $slots.append,
            'fm-input-group-append': $slots.append,
            'fm-input-group-prepend': $slots.prepend
        }
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    >
        <div class="fm-inner-input-group-prepend" v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </div>
        <input 
            type="text"
            :class="[
                'fm-inner-input',
                size ? 'fm-inner-input-' + size : 'fm-inner-input-medium',
            ]"
            :value="currentValue"
            :placeholder="placeholder"
            :disabled="disabled"
            ref="input"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            v-bind="$props">
        <span v-if="showClear" class="fm-inner-suffix-icon" :style="suffixOffset">
            <i class="fm-input-icon fm-input-clear-icon" @click="clear"></i>  
        </span>  
        <div class="fm-inner-input-group-append" v-if="$slots.append">
            <slot name="append"></slot>
        </div>     
    </div>
</template>

<script>
    export default {
        name: 'fm-input',
        props: {
            value: {
                type: [String, Number],
                default: ''
            },
            placeholder: {
                type: String,
                default: '请输入内容'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'medium',
                validator: (val) => ['large', 'medium', 'small', 'mini'].indexOf(val) > -1
            },
            clearable: {
                type: Boolean,
                default: false
            }
        },
    
        data () {
            return {
                currentValue: this.value,
                focused: false,
                hovering: false,
                suffixOffset: null
            };
        },

        computed: {
            showClear () {
                return this.clearable && this.currentValue && (this.focused || this.hovering);
            },

            isGroup () {
                return this.$slots.prepend || this.$slots.append;
            }
        },

        watch: {
            'value' (val, oldVal) {
                this.setCurrentValue(val);   
            }
        },

        methods: {
            setCurrentValue (val) {
                this.currentValue = val;
            },

            handleInput (event) {
                const value = event.target.value;
                this.$emit('input', value);
                this.setCurrentValue(value);
            },

            handleFocus (event) {
                this.focused = true;
                this.$emit('focus', event);
            },

            handleBlur (event) {
                this.focused = false;
                this.$emit('blur', event);
            },

            handleChange (event) {
                this.$emit('change', event.target.value);
            },

            clear () {
                this.$emit('input', '');
                this.$emit('change', '');
                this.setCurrentValue('');
            },

            calcIconOffset (type) {
                if (this.$slots[type]) {
                    const offsetWidth = this.$el.querySelector('.fm-inner-input-group-append').offsetWidth;
                    return {
                        transform: `translateX(-${offsetWidth}px)`
                    };
                }
            }
        },

        mounted () {
            if (this.isGroup) {
                this.suffixOffset = this.calcIconOffset('append');
            }
        }
    };
</script>
