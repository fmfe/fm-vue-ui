<template>
    <transition name="fm-common">
        <div class="model-dialog-wrap" :class="classes" v-show="shown" @click.stop="preventStop">
            <div class="model-dialog-mask" :style="{background: mask ? 'rgba(0, 0, 0, 0.298)' : 'transparent' }"></div>
            <div class="model-dialog">
                <div class="dialog-top" v-if="!validType">
                    <h1>{{title ? title : vuei18n.t('fmdialog.title')}}</h1>
                    <i class="dialog-close-icon" @click="onCancel"></i>
                </div>
                <div class="dialog-middle" :style="{padding: validType ? '25px 0 15px' : 0}">
                    <i class="dialog-middle-icon" v-if="validType" :class="iconClass"></i>
                    <span v-text="message" :style="{margin: validType ? '5px 0 15px' : 0}"></span>
                </div>
                <div class="dialog-bottom" v-if="!validType">
                    <span class="confirm" @click="onConfirm">
                        {{ confirmBtnText ? confirmBtnText : vuei18n.t('fmdialog.confirmText')}}
                    </span>
                    <span class="cancel" v-if="!isSingle" @click="onCancel">
                        {{ cancelBtnText ? cancelBtnText : vuei18n.t('fmdialog.cancelText')}}
                    </span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'fm-dialog',
        props: {
            mask: {
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
                default: '' // success/failure
            },
            duration: {
                type: Number,
                default: 1500
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
            onCancel: null,
            onConfirm: null
        },
        data () {
            return {
                shown: false,
                vuei18n: window.__vueI18n
            };
        },

        computed: {
            iconClass () {
                if (this.type === 'success') {
                    return 'dialog-success-icon';
                }

                if (this.type === 'failure') {
                    return 'dialog-failure-icon';
                }
            },

            validType () {
                return ['success', 'failure'].includes(this.type);
            }
        },

        methods: {
            preventStop () {

            }
        }
    };
</script>
