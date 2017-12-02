<template>
    <span :class="['fm-btn', classNames, disabled ? 'fm-btn-disabled' : '']" @click="handleClick">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'fm-button',
        props: {
            type: {
                type: String,
                default: 'info',
                validator: (val) => ['primary', 'info', 'success', 'default'].includes(val)
            },
            size: {
                type: String,
                default: 'small',
                validator: (val) => ['small', 'large'].includes(val)
            },
            disabled: Boolean
        },

        computed: {
            classNames () {
                let s = '';

                if (this.type === 'success') {
                    s += 'fm-btn-success ';
                } else if (this.type === 'primary') {
                    s += 'fm-btn-primary ';
                } else if (this.type === 'default') {
                    s += 'fm-btn-default ';
                }

                if (this.size === 'large') {
                    s += 'fm-btn-large';
                }

                return s;
            }
        },
        methods: {
            handleClick (e) {
                this.$emit('click', e);
            }
        }
    };
</script>
