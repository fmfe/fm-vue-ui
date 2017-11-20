<template>
    <transition name="dialog">
        <div class="model-dialog-wrap" :class="classes" v-show="shown" @click.stop="" :style="{zIndex: 100002}">
            <div class="model-dialog-mask" :style="{background: mask ? 'rgba(0, 0, 0, 0.298)' : 'transparent' }"></div>
            <div class="model-dialog">
                <div class="dialog-top" v-if="!validType">
                    <h1 v-text="this.title"></h1>
                    <i class="dialog-close-icon" @click="onCancel"></i>
                </div>
                <div class="dialog-middle" :style="{padding: validType ? '25px 0 15px' : 0}">
                    <img :src="imgUrl" v-if="validType">
                    <span v-text="message" :style="{margin: validType ? '5px 0 15px' : 0}"></span>
                </div>
                <div class="dialog-bottom" v-if="!validType">
                    <span class="confirm" v-text="confirmBtnText" @click="onConfirm"></span>
                    <span class="cancel" v-text="cancelBtnText" v-if="!isSingle" @click="onCancel"></span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import './index.less';

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
                default: '请确认'
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
                default: '取消'
            },
            confirmBtnText: {
                type: String,
                default: '确认'
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
                shown: false
            };
        },

        computed: {
            imgUrl () {
                if (this.type === 'success') {
                    return '/assets/modify-ok.png';
                }

                if (this.type === 'failure') {
                    return '/assets/modify-failure.png';
                }
            },

            validType () {
                return ['success', 'failure'].includes(this.type);
            }
        }
    };
</script>
