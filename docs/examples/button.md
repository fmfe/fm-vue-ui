<style>
  .demo-top {
    margin-top: 20px;
  }
</style>
<script>
export default {
    data () {
        return {
            loading: false
        }
    }
}
</script>
## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用 `type` `radius` 和 `size` 属性来定义 Button 的样式。

```html
<div>
  <fm-button>默认按钮</fm-button>
  <fm-button type="primary">主要按钮</fm-button>
  <fm-button type="ghost">幽灵按钮</fm-button>
  <fm-button :radius="false" type="primary">小圆角按钮</fm-button>
</div>

<div class="demo-top">
  <fm-button>small(默认)</fm-button>
  <fm-button type="primary" size="medium">medium</fm-button>
  <fm-button type="primary" size="large">large</fm-button>
  <fm-button type="primary" size="xlarge">xlarge</fm-button>
</div>
```
:::

### 深色模式

按钮可以切换成深色模式。

:::demo 可以使用 `invert` 属性来决定是否使用深色模式，它接受一个Boolean值。

```html
<div style="background: #333;padding: 10px">
  <fm-button invert>默认按钮</fm-button>
  <fm-button type="primary" invert>主要按钮</fm-button>
  <fm-button type="ghost" size="large" invert>幽灵按钮</fm-button>
</div>
```
:::
### loading状态

加载中状态。

:::demo 可以使用 `loading` 属性来定义按钮是否是正在加载状态，它接受一个`Boolean`值。可以通过传递`loadingText`来直接显示 也可以自定义slot（不带loading图标）

```html
  <fm-button @click="loading = !loading" :loading="loading" loading-text="加载中...">Tap to loading</fm-button>
  <fm-button @click="loading = !loading" :loading="loading" size="medium" loading-text="加载中...">Tap to loading</fm-button>
  <fm-button @click="loading = !loading" :loading="loading" size="large" loading-text="加载中...">Tap to loading</fm-button>
  <fm-button @click="loading = !loading" :loading="loading" size="xlarge" loading-text="加载中...">Tap to loading</fm-button>
  <fm-button @click="loading = !loading" :loading="loading" size="xlarge">
      <template slot-scope="scope">
      {{scope.loading ? 'loading...' : 'Tap to loading'}}
    </template>
  </fm-button>
```
:::

### 禁用状态

按钮不可用状态。

:::demo 可以使用 `disabled` 属性来定义按钮是否可用，它接受一个Boolean值。

```html
  <fm-button :disabled="true">默认按钮</fm-button>
  <fm-button type="primary" :disabled="true">主要按钮</fm-button>
  <fm-button type="ghost" :disabled="true">幽灵按钮</fm-button>
```
:::

### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :--------------------------------  | :-------- |
| type | 类型 | string | success/ghost/default | default |
| size | 大小 | string | small/large | small |
| invert | 深色模式 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| radius | 是否启用大圆角模式 | boolean | — | true |
| loading | 是否loading | boolean | — | false |
| loadingText | 加载中显示的文案 | string | — |  |
