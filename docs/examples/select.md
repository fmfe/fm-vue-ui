<script>
    export default {
        data () {
            return {
                val: true,
                val2: '选择2',
                options: ['选择1', '选择2', '选择3'],
                options2: [
                    { value: true, label: '展示给跟随者' },
                    { value: false, label: '不展示给跟随者' }
                ]
            }
        },

        mounted () {
            // setTimeout(() => {
            //     this.options = ["AUD/CAD", "AUD/JPY", "UKOil", "EUR/USD", "XAU/USD", "XAG/USD", "USOil"];
            // }, 2000)
        }
    }
</script>
## Select 选择器
当选项过多时，使用下拉菜单展示并选择内容。

### 基础用法
适用广泛的基础单选

::: demo `v-model` 的值为当前被选中的 `fm-option` 的 `value` 属性值
```html
<fm-select v-model="val">
    <fm-option v-for="(item, index) in options2" :key="index" :value="item.value" :label="item.label"></fm-option>
</fm-select>
<fm-select v-model="val2">
    <fm-option value="" label="全部"></fm-option>
    <fm-option v-for="(item, index) in options" :key="index" :value="item" :label="item"></fm-option>
</fm-select>

<script>
    export default {
        data () {
            return {
                val: true,
                val2: '选择2',
                options: ['选择1', '选择2', '选择3'],
                options2: [
                    { value: true, label: '展示给跟随者' },
                    { value: false, label: '不展示给跟随者' }
                ]
            }
        }
    }
</script>
```
:::

### 禁用状态
::: demo 通过 `disabled` 属性指定是否禁用 select 组件
```html
    <fm-select disabled>
        <fm-option v-for="(item, index) in options" :key="index" :value="item" :label="item"></fm-option>
    </fm-select>   
```
:::

### Select 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :--------------------------------  | :-------- |
| value | 绑定值 | string/number/boolean | - | - |
| disabled | 是否禁用 | boolean | — | false |
| placeholder | 输入框占位文本	 | string | — | 请选择/Please select |
| emptyText | 无数据时显示的文本	 | string | — | 暂无数据/No Data |

### Option 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :--------------------------------  | :-------- |
| value | 选项的值, 若该值为假则与 `label` 相同 | string/number/boolean | - | - |
| label | 选项的标签，若不设置则默认与 `value` 相同 | string/number | — | - |

### 事件
| 事件名称	      | 说明          | 回调参数 |
| :---------- | :-------------- | :---------- |
| change | 选值改变时触发 | (value: string \| number \| boolean) |