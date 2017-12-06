<template>
    <transition name="fm-common">
        <div class="fm-loading-wrap" v-if="shown">
            <img src="//cdn.followme.com/cdn/images/newloading.gif" alt="loading...">
            <div class="fm-loading-text">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'fm-loading',
        props: {
            shown: {
                type: Boolean,
                default: false
            }
        }
    };
</script>