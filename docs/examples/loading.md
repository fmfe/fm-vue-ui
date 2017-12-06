<style>
    .loading-wrap {
        position: relative;
        width: 100%;
        height: 100px;
    }
</style>
## Loading 加载
加载数据时显示动效。

### 区域加载
在容器元素中加载数据时显示。

:::demo 容器元素需要的 `postion` 属性为非 `static`。

```html
<div class="loading-wrap">
  <fm-loading :shown="true" :screen="true"></fm-loading>
</div>
```
:::

### 自定义
可自定义加载文案。

:::demo 自定义加载文案。

```html
<div class="loading-wrap">
  <fm-loading :shown="true">
    <span>加载中加载中...</span>
  </fm-loading>
</div>
```
:::

### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :--------------------------------  | :-------- |
| shown | 是否显示 loading | boolean | - | false |
