<template>
    <div class="fm-collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'fm-collapse',
        props: {
            accordion: Boolean, // 是否支持手风琴模式
            default: false
        },
        provide () {
            return {
                collapse: this
            };
        }
    };
</script>