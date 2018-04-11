<template>
    <div class="change-log">
        <div class="heading">更新日志</div>
        <ul class="timeline">
            <li>
                <h3>2.0.0</h3>
                <em>2018/04/11</em>
                <ul>
                    <li>添加 RadioButtonGroup 组件</li>
                    <li>优化 select/tabs 等组件</li>
                    <li>优化国际化处理</li>
                    <li>一些 BugFix</li>
                    <li>构建优化</li>
                </ul>
            </li>
            <li>
                <h3>1.0.0</h3>
                <em>2017/12/27</em>
                <ul>
                    <li>添加 Select/Switch/Input/Checkbox/Radio 等基本表单组件</li>
                    <li>添加 Rate/Carousel 等组件</li>
                </ul>
            </li>
            <li>
                <h3>0.2.0</h3>
                <em>2017/12/06</em>
                <ul>
                    <li>添加公共库工具</li>
                    <li>添加 Loading/Collapse/Tabs 组件</li>
                </ul>
            </li>
            <li>
                <h3>0.1.0</h3>
                <em>2017/12/02</em>
                <ul>
                    <li>样式集中管理，便于主题式开发</li>
                    <li>更换包名为 fm-vue-ui，以支持样式的按需加载</li>
                    <li>更改国际化支持方式</li>
                </ul>
            </li>
            <li>
                <h3>0.0.5</h3>
                <em>2017/12/02</em>
                <ul>
                    <li>支持国际化配置</li>
                    <li>添加组件的单元测试示例</li>
                </ul>
            </li>
            <li>
                <h3>0.0.2</h3>
                <em>2017/11/27</em>
                <ul>
                    <li>搭建组件库的开发框架和流程规范</li>
                    <li>搭建组件库的文档以及示例说明</li>
                    <li>提供 Button/Dialog 两个基础组件</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'change-log'
    };
</script>

<style lang="less">
    .change-log {
        padding-top: 25px;
        padding-bottom: 50px;
        .heading {
            font-size: 24px;
            margin-bottom: 30px;
            color: #333;
        }
        .timeline {
            list-style: none;
            padding: 0;
            padding-bottom: 10px;
            position: relative;
            color: #5e6d82;
            & > li {
                position: relative;
                padding: 0 15px 15px 15px;
                list-style: none;
                line-height: 1.8;
                border: 1px solid #ddd;
                border-radius: 4px;
                margin-bottom: 50px;
                & > em {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                }
                ul {
                    border-top: 1px solid #ddd;
                    padding: 30px 30px 15px;
                    list-style-type: disc;
                }
            }
        }
    }
</style>