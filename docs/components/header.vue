<template>
    <div class="docs-header">
        <header>
            <img src="https://cdn.followme.com/images/logo_50.png" alt="Followme" title="Followme">
            <span>FM Basic Vue Components</span>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'docs-header'
    };
</script>

<style lang="less">
    .docs-header {
        position: fixed;
        left: 0;
        right: 0;
        z-index: 1024;
        height: 60px;
        line-height: 60px;
        background: #fff;
        header {
            margin: 0 auto;
            width: 1024px;
            position: relative;
            span {
                position: absolute;
                left: 35px;
            }
        }
        img {
            vertical-align: middle;
        }
    }
</style>
