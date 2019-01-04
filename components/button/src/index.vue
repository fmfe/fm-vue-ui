<template>
    <button :class="[
            'fm-button',
            `fm-button-${type}`,
            invert ? 'fm-button-invert' : '',
            size ? `fm-button-${size}` : '',
            disabled || loading ? 'fm-button-disabled' : '',
            radius ? 'fm-button-radius-large' : ''
        ]"
            @click="handleClick">
        <template v-if="loading && loadingText">
            <img class="fm-button-loading-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0ibGRzLXJvbGxpbmciIHN0eWxlPSJiYWNrZ3JvdW5kOjAgMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjY2NjIiBzdHJva2Utd2lkdGg9IjIiIHI9IjE2IiBzdHJva2UtZGFzaGFycmF5PSI3NS4zOTgyMjM2ODYxNTUwMyAyNy4xMzI3NDEyMjg3MTgzNDUiIHRyYW5zZm9ybT0icm90YXRlKDE2Ny45MjEgNTAgNTApIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9ImxpbmVhciIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvY2lyY2xlPjwvc3ZnPg==" />
            {{loadingText}}
        </template>
        <template v-else>
            <slot :loading="loading">
            </slot>
        </template>
    </button>
</template>

<script>
    export default {
        name: 'fm-button',
        props: {
            type: {
                type: String,
                default: 'default',
                validator: (val) => ['primary', 'ghost', 'default'].includes(val)
            },
            size: {
                type: String,
                default: 'small',
                validator: (val) => ['small', 'medium', 'large', 'xlarge'].includes(val)
            },
            disabled: Boolean,
            invert: Boolean,
            radius: {
                type: Boolean,
                default: true
            },
            loading: {
                type: Boolean,
                default: false
            },
            loadingText: {
                type: String,
                default: ''
            }
        },
        methods: {
            handleClick (e) {
                if (this.disabled) return;
                this.$emit('click', e);
            }
        }
    };
</script>
