
<script>
    export default {
        data () {
            return {
                val: false,
                val2: true,
                val3: true,
                val4: false
            }
        }
    }
</script>
## Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基础用法
基础的开关用法

:::demo `v-model` 绑定的值是一个 `Boolean` 值。

```html
<fm-switch v-model="val"></fm-switch>
<fm-switch v-model="val2"></fm-switch>

<script>
    export default {
        data () {
            return {
                val: false,
                val2: true
            }
        }
    }
</script>
```
:::

### 禁用状态
开关的不可用状态

:::demo 设置 `disabled` 属性即可。

```html
<fm-switch v-model="val3" disabled></fm-switch>
<fm-switch v-model="val4" disabled></fm-switch>

<script>
    export default {
        data () {
            return {
                val3: true,
                val4: false
            }
        }
    }
</script>
```
:::

### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :--------------------------------  | :-------- |
| value | 绑定值 | boolean | - | false |
| disabled | 是否禁用 | boolean | — | false |

### 事件
| 事件名称	      | 说明          | 回调参数 |
| :---------- | :-------------- | :---------- |
| change | 当绑定值变化时触发的事件	 | (event: Event) |