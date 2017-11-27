<style>
  .demo-top {
    margin-top: 20px;
  }
</style>
## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用 `type` 和 `size` 属性来定义 Button 的样式。

```html
<div>
  <fm-button>默认按钮</fm-button>
  <fm-button type="primary">主要按钮</fm-button>
  <fm-button type="info">信息按钮</fm-button>
  <fm-button type="success">成功按钮</fm-button>
</div>

<div class="demo-top">
  <fm-button>默认大小</fm-button>
  <fm-button type="primary" size="large">large</fm-button>
</div>
```
:::

### 禁用状态

按钮不可用状态。

:::demo 可以使用 `disabled` 属性来定义按钮是否可用，它接受一个Boolean值。

```html
  <fm-button :disabled="true">默认按钮</fm-button>
  <fm-button type="primary" :disabled="true">主要按钮</fm-button>
  <fm-button type="info" :disabled="true">信息按钮</fm-button>
  <fm-button type="success" :disabled="true">成功按钮</fm-button>
```
:::

### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :--------------------------------  | :-------- |
| type | 类型 | string | success/primary/default/info | info |
| size | 大小 | string | small/large | small |
| disabled | 是否禁用 | boolean | — | false |
