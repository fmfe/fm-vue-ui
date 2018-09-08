<template>
    <label class="fm-checkbox" :class="{
            'is-checked': selfModel,
            'is-disabled': disabled
        }">
        <span :class="[
            'fm-checkbox-input',
            size ? 'fm-checkbox-' + size : 'fm-checkbox-small',
            {
                'is-checked': selfModel,
                'is-disabled': disabled
            }
        ]">
            <span class="fm-checkbox-inner"></span>
            <input type="checkbox"
                   v-model="selfModel"
                   :value="label"
                   :name="name"
                   class="fm-checkbox-original"
                   :disabled="disabled">
        </span>
        <span class="fm-checkbox-label" v-if="label || $slots.default">
            <slot>{{label}}</slot>
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
                selfModel: this.value
            };
        },
        watch: {
            value (val) {
                if (this.selfModel === val) return;
                this.selfModel = val;
            },
            selfModel (val) {
                if (this.value === val) return;
                this.$emit('input', val);
                this.$emit('change', val);
            }
        }
    };
</script>
