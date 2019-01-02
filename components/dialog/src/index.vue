<template>
    <transition name="fm-common">
        <div class="fm-model-dialog-wrap" :class="classes" v-show="shown" @click.stop="preventStop">
            <div class="fm-model-dialog-mask"
                 :style="{background: mask ? 'rgba(0, 0, 0, 0.298)' : 'transparent' }"></div>
            <div class="fm-model-dialog">
                <div class="fm-dialog-top" v-if="!validType">
                    <h1>{{title ? title : $ft('fmdialog.title')}}</h1>
                    <i class="fm-dialog-close-icon icon-close_24px" @click="requestClose"></i>
                </div>
                <div class="fm-dialog-middle">
                    <i class="fm-dialog-middle-icon" v-if="validType" :class="iconClass"></i>
                    <!--可选html渲染-->
                    <span v-html="message" class="html-render" v-if="renderType==='html'" :style="{margin: validType ? '5px 0 15px' : 0}"></span>
                    <!--默认是text渲染-->
                    <span v-text="message" v-else :style="{margin: validType ? '5px 0 15px' : 0}"></span>
                </div>
                <div class="fm-dialog-bottom" v-if="!validType">
                    <span class="fm-cancel" v-if="!isSingle" @click="onCancel">
                        {{ cancelBtnText ? cancelBtnText : $ft('fmdialog.cancelText')}}
                    </span>
                    <span class="fm-confirm" :class="{disabled: disabled}" @click="onConfirm">
                        {{ confirmBtnText ? confirmBtnText : $ft('fmdialog.confirmText')}}
                    </span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import i18n from 'fm-vue-ui/src/mixins/i18n';

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
                default: '' // success/failure
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
            onClose: null
        },
        data () {
            return {
                shown: false
            };
        },

        computed: {
            iconClass () {
                if (this.type === 'success') {
                    return 'fm-dialog-success-icon';
                }

                if (this.type === 'failure') {
                    return 'fm-dialog-failure-icon';
                }
            },

            validType () {
                return ['success', 'failure'].includes(this.type);
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
