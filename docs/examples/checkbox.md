<script>
    export default {
        data () {
            return {
                checked: false,
                checked1: false,
                checked2: true,
                disabled: true
            }
        }
    }
</script>
## Checkbox 多选框
一组备选项中进行多选。

### 基础用法


:::demo 基础的多选框用法。

```html
<fm-checkbox v-model="checked">复选框</fm-checkbox>
<fm-checkbox size="medium" v-model="checked">复选框</fm-checkbox>
<fm-checkbox size="large" v-model="checked">复选框</fm-checkbox>

<fm-checkbox size="medium" disabled v-model="checked">复选框</fm-checkbox>
<fm-checkbox size="large" disabled v-model="checked">复选框</fm-checkbox>
<fm-checkbox size="small" disabled v-model="checked">复选框</fm-checkbox>

<script>
    export default {
        data () {
            return {
                checked: false,
            }
        }
    }
</script>
```
:::

### 禁用状态
多选框的不可用状态

:::demo 设置 `disabled` 属性即可。

```html
<fm-checkbox v-model="checked1" disabled>不可用</fm-checkbox>
<fm-checkbox v-model="checked2" disabled>选中不可用</fm-checkbox>

<script>
    export default {
        data () {
            return {
                disabled: true,
                checked1: false,
                checked2: true
            }
        }
    }
</script>
```
:::

### 尺寸
指定多选框的大小

::: demo 可通过 `size` 属性指定输入框的尺寸，默认大小是 `small`
```html
    <fm-checkbox label="小尺寸" size="small"></fm-checkbox>
    <fm-checkbox label="中尺寸" size="medium"></fm-checkbox>
    <fm-checkbox label="大尺寸" size="large"></fm-checkbox>
```
:::

### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :--------------------------------  | :-------- |
| value | 绑定值 | string/number | - | - |
| size | 输入框尺寸 | string | large/medium/small | small |
| disabled | 是否禁用 | boolean | — | false |
| name | 原生 name 属性 | string | — | - |
| label | 选中状态的值 | string/boolean | — | - |

### 事件
| 事件名称	      | 说明          | 回调参数 |
| :---------- | :-------------- | :---------- |
| change | 当绑定值变化时触发的事件	 | (value: string \| number, event: Event) |
