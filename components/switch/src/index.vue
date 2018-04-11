<template>
    <label ref="label" class="fm-switch">
        <input  type="checkbox" 
                class="fm-switch-input" 
                v-model="selfChecked"
                :disabled="disabled" 
                @change="handleChange">
        <div :class="[
            'fm-switch-label',
            { 
                'is-checked': selfChecked,
                'is-disabled': disabled
            }
        ]">
        </div>
        <span class="fm-switch-btn" :style="{left: this.left}"></span>
    </label>
</template>

<script>
    export default {
        name: 'fm-switch',
        props: {
            value: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },

        data () {
            return {
                selfChecked: false,
                left: '2px',
                width: 0
            };
        },

        methods: {
            handleChange (e) {
                this.selfChecked = e.target.checked;
                this.caclBthLeft();
                this.$emit('input', this.selfChecked);
                this.$emit('change', e);
            },

            caclBthLeft () {
                if (this.selfChecked) {
                    this.left = `${this.width - 18}px`;
                } else {
                    this.left = '2px';
                }
            }
        },

        created () {
            this.selfChecked = Boolean(this.value);
        },

        mounted () {
            this.width = this.$refs.label.getBoundingClientRect().width;
            this.caclBthLeft();
        }
    };
</script>