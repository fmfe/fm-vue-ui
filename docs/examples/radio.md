<script>
    export default {
        data () {
            return {
                val1: '',
                val2: 'test2',
                val3: '大尺寸'
            }
        }
    }
</script>
## Radio 单选框
在一组备选项中进行单选。

### 基础用法

:::demo 基础的单选框用法，`v-model` 绑定的是 `label` 属性对应的值。

```html
<fm-radio label="test" v-model="val1">单选框</fm-radio>
<fm-radio label="test2" v-model="val1">单选框</fm-radio>

<script>
    export default {
        data () {
            return {
                val1: '',
            }
        }
    }
</script>
```
:::

### 禁用状态
单选框的不可用状态

:::demo 设置 `disabled` 属性即可。

```html
<fm-radio disabled label="test" v-model="val2">不可用</fm-radio>
<fm-radio disabled label="test2" v-model="val2">选中不可用</fm-radio>

<script>
    export default {
        data () {
            return {
                val2: 'test2'
            }
        }
    }
</script>
```
:::

### 尺寸
指定单选框的大小

::: demo 可通过 `size` 属性指定输入框的尺寸，默认大小是 `small`
```html
    <fm-radio label="小尺寸" size="small"></fm-radio>
    <fm-radio label="中尺寸" size="medium"></fm-radio>
    <fm-radio label="大尺寸" size="large"></fm-radio>
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