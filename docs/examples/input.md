<script>
    export default {
        data () {
            return {
                val: '',
                val1: '点击按钮清空'
            }
        },

        watch: {
            val (value) {
                console.log('input value', value);
            }
        }
    }
</script>
<style>
    .input-demo {
        margin-bottom: 15px;
    }
</style>   
## Input 输入框
通过鼠标或键盘输入字符

### 基础用法

::: demo 基础的输入框用法。
```html
    <fm-input v-model="val"></fm-input> 
    <script>
        export default {
            data () {
                return {
                    val: ''
                }
            }
        }
    </script>    
```
:::

### 禁用状态
::: demo 通过 `disabled` 属性指定是否禁用 input 组件
```html
    <fm-input v-model="val" :disabled="true"></fm-input>   
```
:::

### 尺寸
::: demo 可通过 `size` 属性指定输入框的尺寸，默认大小是 `medium`
```html
    <fm-input placeholder="默认大小"></fm-input>   
    <fm-input placeholder="最大尺寸" size="large"></fm-input>
    <fm-input placeholder="小尺寸" size="small"></fm-input>
    <fm-input placeholder="最小尺寸" size="mini"></fm-input>
```
:::

### 可清空

::: demo 可通过 `clearable` 属性得到一个可清空的输入框
```html
    <fm-input clearable v-model="val1"></fm-input>
    <script>
        export default {
            data () {
                return {
                    val1: '点击按钮清空'
                }
            }
        }
    </script>   
```
:::

### 复合型输入框
可前置或后置元素，一般为标签或按钮

:::demo 可通过 slot 来指定在 input 中前置或者后置内容
```html
<div class="input-demo">
  <fm-input placeholder="请输入内容">
    <template slot="prepend">Http://</template>
  </fm-input>
</div>
<div class="input-demo">
  <fm-input placeholder="请输入内容">
    <template slot="append">.com</template>
  </fm-input>
</div>
<div class="input-demo">
  <fm-input placeholder="请输入内容" clearable>
    <template slot="prepend">Http://</template>
    <template slot="append">.com</template>
  </fm-input>
</div>
``` 
:::

### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :--------------------------------  | :-------- |
| value | 绑定值 | string/number | - | - |
| size | 输入框尺寸 | string | large/medium/small/mini | medium |
| disabled | 是否禁用 | boolean | — | false |
| placeholder | 输入框占位文本	 | string | — | - |
| clearable | 是否可清空	 | boolean | — | false |

### Slots
| name      | 说明          |
| :---------- | :-------------- |
| prepend | 输入框前置内容 | 
| append | 输入框后置内容 | 

### 事件
| 事件名称	      | 说明          | 回调参数 |
| :---------- | :-------------- | :---------- |
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 在 Input 值改变时触发 | (value: string | number) |

