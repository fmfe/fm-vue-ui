<template>
    <div class="docs-side-nav">
        <ul>
            <li class="nav-item" v-for="(item, index) in navs" :key="index">
                <a v-if="item.href" :href="item.href" v-text="item.title" target="_blank"></a>
                <router-link 
                    exact
                    active-class="active"
                    v-if="item.path" 
                    :to="item.path" 
                    v-text="item.title">
                </router-link>
                <ul class="sub-nav" v-if="item.children">
                    <div class="sub-nav-title" v-text="item.title"></div>
                    <li class="nav-item" v-for="(navItem, navIndex) in item.children" :key="navIndex">
                        <router-link
                            active-class="active"
                            :to="navItem.path"
                            exact
                            v-text="navItem.title">
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import navsData from '../nav.config.json';
    export default {
        name: 'docs-side-nav',
        data () {
            return {
                navs: navsData['zh-CN']
            };
        }
    };
</script>

<style lang="less">
    .docs-side-nav {
        position: fixed;
        width: 220px;
        height: auto;
        padding: 15px;
        border: 1px solid #edeef2;
        background: #fff;
        vertical-align: top;
    }
</style>