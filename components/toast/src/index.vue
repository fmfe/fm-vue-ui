<template>
    <transition name="fm-toast-fade">
        <div class="fm-toast" :class="classes" v-show="shown" @click="preventStop">
            <i class="fm-toast-icon" :class="[iconClass[type], type]"></i>
            <div class="fm-toast-message">
                {{message}}
            </div>
        </div>
    </transition>
</template>

<script>
    import i18n from 'fm-vue-ui/src/mixins/i18n';

    const ToastTypes = {
        SUCCESS: 'success',
        INFO: 'info',
        WARNING: 'warning',
        ERROR: 'error'
    };
    export default {
        name: 'fm-toast',
        mixins: [i18n],
        props: {
            classes: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'success' // success/info/warning/error
            },
            duration: {
                type: Number,
                default: 3000
            },
            message: {
                type: String,
                default: ''
            },
            onClose: null
        },
        data () {
            return {
                shown: false,
                iconClass: {
                    [ToastTypes.SUCCESS]: 'icon-info_circle_24px',
                    [ToastTypes.INFO]: 'icon-info_filled_24px',
                    [ToastTypes.WARNING]: 'icon-exclamation_filled_24px',
                    [ToastTypes.ERROR]: 'icon-close_filled_24px'
                }
            };
        },
        methods: {
            preventStop () {
                this.onClose();
            }
        }
    };
</script>
