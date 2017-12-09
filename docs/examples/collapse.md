<style lang="less">
    .collapse-content {
        padding: 20px;
        height: 150px;
    }
    .fm-collapse-item {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0px;
        }
    }
    .edit-icon{
        display: inline-block;
        width: 9px;
        height: 10px;
        background: url("//alibetawww.followme.com/portalindex/assets/account-nav-icon.png") no-repeat -120px 0;
        vertical-align: top;
        margin: 2px 0 0 0;
        &:hover{
            background-position: -160px 0;
        }
        &.edit-hover-icon{
            background-position: -160px 0;
        }
        &.edit-icon-active{
            background-position: -120px -20px;
            &:hover{
                background-position: -160px -20px;
            }
            &.edit-hover-icon-active{
                background-position: -160px -20px;
            }
        }
    }
</style>
<script>
    export default {
        mounted () {
            if (this.$refs.list) {
                this.$refs.list.showCollapseItem();
            }
        }
    }
</script>
## Collapse 折叠面板
通过折叠面板收纳内容区域。

### 基础用法
同时只能展开一个面板。具体见个人中心-个人设置页面。

:::demo 同时只能展开一个面板。

```html
  <fm-collapse>
      <fm-collapse-item title="头像">
          <div class="collapse-content">个人设置-上传头像</div>
      </fm-collapse-item>
      <fm-collapse-item title="基本资料">
          <div class="collapse-content">个人设置-基本资料</div>
      </fm-collapse-item>
  </fm-collapse>
```
:::

也可以按照个人中心-交易设置页面处理：

:::demo 可以设置简要说明、右侧区域的展开/收缩文本。

```html
  <fm-collapse>
      <fm-collapse-item title="交易账号" act-text="编辑 收起">
          <div class="collapse-content">
              <p>交易账号</p>
              <p>展开/收缩文本需要以空格分开</p>
          </div>
      </fm-collapse-item>
      <fm-collapse-item title="快速下单" info="已开启" act-text="编辑 收起">
          <div class="collapse-content">
              <p>快速下单</p>
              <p>info 用于设置简要说明</p>
          </div>
      </fm-collapse-item>
      <fm-collapse-item title="快速平仓" info="带 icon" act-text="编辑 收起" icon-classes="edit-icon edit-hover-icon edit-icon-active edit-hover-icon-active">
          <div class="collapse-content">
              <p>快速平仓</p>
              <p>设置右侧 icon：icon 的类以空格分开</p>
              <p>类名包含 hover 的是鼠标 hover 上去添加的类，包含 active 的是面板展开时添加的类，带 hover & active 的是展开时鼠标 hover 时添加的类</p>
          </div>
      </fm-collapse-item>
  </fm-collapse>
```
:::

### 手风琴效果
展开多个面板。

:::demo 设置 `accordion` 为 true，可实现手风琴效果。

```html
  <fm-collapse accordion>
      <fm-collapse-item title="头像">
          <div class="collapse-content">个人设置-上传头像</div>
      </fm-collapse-item>
      <fm-collapse-item title="基本资料">
          <div class="collapse-content">个人设置-基本资料</div>
      </fm-collapse-item>
  </fm-collapse>
```
:::

### 默认展开面板
:::demo 方法调用: `this.$refs.list.showCollapseItem()`。

```html
  <fm-collapse>
      <fm-collapse-item title="默认展开" ref='list'>
          <div class="collapse-content">默认展开的面板</div>
      </fm-collapse-item>
  </fm-collapse>
```
:::

### Collapse 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :--------------------------------  | :-------- |
| accordion | 是否启用手风琴效果 | boolean | - | false |

### Collapse Item 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :--------------------------------  | :-------- |
| title | 面板标题 | string | - | '' |
| info | 标题辅助说明 | string | - | '' |
| act-text |  空格分开的文本 | string | - | '' |
| icon-classes | icon 的类名，空格分开 | string | - | '' |