<template>
    <transition name="fm-notification-fade">
        <div class="fm-notification" :class="classes" v-show="shown">
            <div class="fm-notification-header">
                <i class="fm-notification-icon" :class="[iconClass[type], type]"></i>
                <span class="fm-notification-title">
                    {{title}}
                </span>
            </div>
            <div class="fm-notification-message">
                <slot>{{message}}</slot>
            </div>
            <i class="fm-notification-close-icon icon-close_24px" @click.stop="preventStop"></i>
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
        name: 'fm-notification',
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
            title: {
                type: String,
                default: '' // success/info/warning/error
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
                    [ToastTypes.SUCCESS]: 'icon-check_filled_24px',
                    [ToastTypes.INFO]: 'icon-info_filled_24px',
                    [ToastTypes.WARNING]: 'icon-exclamation_filled_24px',
                    [ToastTypes.ERROR]: 'icon-exclamation_filled_24px'
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
