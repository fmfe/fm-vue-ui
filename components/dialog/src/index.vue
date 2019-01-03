<template>
    <transition name="fm-common">
        <div class="fm-model-dialog-wrap" :class="classes" v-show="shown" @click.stop="preventStop">
            <div class="fm-model-dialog-mask"
                 :style="{background: mask ? 'rgba(0, 0, 0, 0.298)' : 'transparent' }"></div>
            <div class="fm-model-dialog">
                <div class="fm-dialog-top">
                    <h1>{{title ? title : $ft('fmdialog.title')}}</h1>
                    <i class="fm-dialog-close-icon icon-close_24px" @click="requestClose"></i>
                </div>
                <div class="fm-dialog-middle">
                    <slot name="content">
                        <i class="fm-dialog-middle-icon" v-if="iconType" :class="[iconClass[type], type]"></i>
                        <!--可选html渲染-->
                        <span v-html="message" class="html-render" v-if="renderType==='html'"></span>
                        <!--默认是text渲染-->
                        <span v-text="message" v-else></span>
                    </slot>
                </div>
                <slot name="footer">
                    <div class="fm-dialog-bottom" v-if="!hideFooter">
                        <span class="fm-cancel" v-if="!isSingle" @click="onCancel">
                            {{ cancelBtnText ? cancelBtnText : $ft('fmdialog.cancelText')}}
                        </span>
                        <span class="fm-confirm" :class="{disabled: disabled}" @click="onConfirm">
                            {{ confirmBtnText ? confirmBtnText : $ft('fmdialog.confirmText')}}
                        </span>
                    </div>
                </slot>
            </div>
        </div>
    </transition>
</template>

<script>
    import i18n from 'fm-vue-ui/src/mixins/i18n';

    const DialogTypes = {
        SUCCESS: 'success',
        INFO: 'info',
        WARNING: 'warning',
        ERROR: 'error'
    };
    export default {
        name: 'fm-dialog',
        mixins: [i18n],
        props: {
            mask: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            classes: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: '' // DialogTypes 👆
            },
            duration: {
                type: Number,
                default: 1500
            },
            renderType: {
                type: String,
                default: 'text'
            },
            message: {
                type: String,
                default: ''
            },
            cancelBtnText: {
                type: String,
                default: ''
            },
            confirmBtnText: {
                type: String,
                default: ''
            },
            isSingle: {
                type: Boolean,
                default: false
            },
            cancelOnClose: {
                type: Boolean,
                default: true
            },
            onCancel: null,
            onConfirm: null,
            onClose: null,
            // 隐藏footer
            hideFooter: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                shown: false,
                iconClass: {
                    [DialogTypes.SUCCESS]: 'icon-info_circle_24px',
                    [DialogTypes.INFO]: 'icon-info_filled_24px',
                    [DialogTypes.WARNING]: 'icon-exclamation_filled_24px',
                    [DialogTypes.ERROR]: 'icon-close_filled_24px'
                }
            };
        },

        computed: {
            iconType () {
                return Object.keys(DialogTypes).includes(this.type.toUpperCase());
            }
        },

        methods: {
            preventStop () {

            },
            requestClose () {
                if (this.cancelOnClose) {
                    this.onCancel();
                } else {
                    this.onClose();
                }
            }
        }
    };
</script>
