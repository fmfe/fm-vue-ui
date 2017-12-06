<style>
    .btn-wrap {
        margin-bottom: 15px;
    }
</style>
<script>
    export default {
        data () {
            return {
                activePanel: 0,
                activePanel2: 1,
                activePanel3: '外汇',
                tabs: [
                    {
                        index: '外汇',
                        label: '外汇',
                        content: '外汇1'
                    },
                    {
                        index: '贵金属',
                        label: '贵金属',
                        content: '贵金属1'
                    },
                    {
                        index: '指数',
                        label: '指数',
                        content: '指数1'
                    }
                ],
                delIndex: -1
            }
        },

        watch: {
            activePanel (val) {
                console.log('111111--panel', val);
            }
        },

        methods: {
            tabClick (val, e) {
                console.log('点击了 tab ' + val);
            },

            deleteTab (index, e) {
                const tabs = [].concat(this.tabs);
                let delIndex = -1;

                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].index === index) {
                        delIndex = i;
                        break;
                    }
                }
                if (delIndex > -1) {
                    this.tabs.splice(delIndex, 1);
                    if (index === this.activePanel3) {
                        const nextTab = tabs[delIndex + 1] || tabs[delIndex - 1];
                        this.activePanel3 = nextTab.index;
                    }
                }
            },

            addTab () {
                const len = this.tabs.length;
                this.tabs.push({
                    index: this.tabs[len - 1] ? this.tabs[len - 1].index + 1 : '外汇0',
                    label: '外汇' + (len + 1),
                    content: 'add' + (len + 1)
                });
                if (this.tabs.length === 1) {
                    this.activePanel3 = this.tabs[0].index;
                }
            }
        }
    }
</script>

## Tabs 标签页
分隔内容上有关联但属于不同类别的数据集合。

### 基础用法
基础的、简洁的标签页。

:::demo Tabs 组件提供了选项卡功能，默认选中第一个标签页。

```html
<fm-tabs v-model="activePanel">
    <fm-tab-panel :index="0" label="外汇">
        外汇
    </fm-tab-panel>
    <fm-tab-panel :index="1" label="贵金属">
        贵金属
    </fm-tab-panel>
    <fm-tab-panel :index="2" label="指数">
        指数
    </fm-tab-panel>
</fm-tabs>

<script>
    export default {
        data () {
            return {
                activePanel: 0
            }
        },

        watch: {
            activePanel (val) {
                console.log('111111--panel', val);
            }
        }
    }
</script>
```
:::

通过 `value` 属性指定默认的选项：

:::demo `value` 属性指定默认的选项。

```html
<fm-tabs v-model="activePanel2" @tab-click="tabClick">
    <fm-tab-panel :index="0" label="外汇">
        外汇
    </fm-tab-panel>
    <fm-tab-panel :index="1" label="贵金属">
        贵金属
    </fm-tab-panel>
    <fm-tab-panel :index="2" label="指数">
        指数
    </fm-tab-panel>
</fm-tabs>

<script>
    export default {
        data () {
            return {
                activePanel2: 1
            }
        },

        methods: {
            tabClick (val, e) {
                console.log('点击了 tab ' + val);
            }
        }
    }
</script>
```
:::

### 选项卡样式
选项卡样式的标签页。

:::demo 只需要设置 `type` 属性为 `card` 就可以使选项卡改变为标签风格。

```html
<fm-tabs type="card">
    <fm-tab-panel :index="0" label="外汇">
        外汇
    </fm-tab-panel>
    <fm-tab-panel :index="1" label="贵金属">
        贵金属
    </fm-tab-panel>
    <fm-tab-panel :index="2" label="指数">
        指数
    </fm-tab-panel>
</fm-tabs>
```
:::

### 动态增减标签页
增减标签页按钮只能在选项卡样式的标签页下使用。

:::demo

```html
<div class="btn-wrap">
    <fm-button @click="addTab"> 添加 tab </fm-button>
</div>
<fm-tabs type="card" v-model="activePanel3" closable @tab-delete="deleteTab">
    <fm-tab-panel v-for="(tab, index) in tabs" :index="tab.index" :label="tab.label" :key="index">
        {{tab.content}}
    </fm-tab-panel>
</fm-tabs>

<script>
    export default {
        data () {
            return {
                activePanel3: '贵金属',
                tabs: [
                    {
                        index: '外汇',
                        label: '外汇',
                        content: '外汇1'
                    },
                    {
                        index: '贵金属',
                        label: '贵金属',
                        content: '贵金属1'
                    },
                    {
                        index: '指数',
                        label: '指数',
                        content: '指数1'
                    }
                ],
                delIndex: -1
            }
        },
        methods: {
            deleteTab (index, e) {
                const tabs = [].concat(this.tabs);
                let delIndex = -1;

                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].index === index) {
                        delIndex = i;
                        break;
                    }
                }
                if (delIndex > -1) {
                    this.tabs.splice(delIndex, 1);
                    if (index === this.activePanel3) {
                        const nextTab = tabs[delIndex + 1] || tabs[delIndex - 1];
                        this.activePanel3 = nextTab.index;
                    }
                }
            },

            addTab () {
                const len = this.tabs.length;
                this.tabs.push({
                    index: this.tabs[len - 1] ? this.tabs[len - 1].index + 1 : '外汇0',
                    label: '外汇' + (len + 1),
                    content: 'add' + (len + 1)
                });
                if (this.tabs.length === 1) {
                    this.activePanel3 = this.tabs[0].index;
                }
            }
        }
    }
</script>
```
:::

### Tabs 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :--------------------------------  | :-------- |
| type | 风格类型 | string | card/panel | panel |
| closable | 标签是否可关闭 | boolean | - | false |
| value | 绑定值，选中选项卡的 index | string/number | — | 第一个选项卡的 index |

### Tabs 事件
| 事件名称      | 说明          | 回调参数 |
| :---------- | :-------------- | :---------- |
| tab-click | tab 被选中时触发 |  被选中的标签 tab 的 index  |
| delete-tab | 点击 tab 移除按钮后触发 | 被删除的标签的 index |

### Tab-panel 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :--------------------------------  | :-------- |
| index | 唯一能标识 tab panel 的字段 | string/number | - | - |
| label | 选项卡标题 | string | - | - |

