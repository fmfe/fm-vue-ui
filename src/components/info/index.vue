<template lang="html">
    <div class="info">
        <h2>{{info}}</h2>
        <h3>Project Name: fm-vue-ui</h3>
        <h3>Project Version: 0.0.1</h3>
        <h3>Author: fmfe</h3>
        <h3>Desc: Basic vue components</h3>
    </div>
</template>

<script>
export default {
    name: 'info',
    data () {
        return {
            info: 'project info:'
        };
    }
};
</script>

<style>
    h2{
        margin: 10px;
        font-size: 20px;
    }
</style>
