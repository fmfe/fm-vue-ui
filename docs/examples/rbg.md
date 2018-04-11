<script>
    export default {
        data () {
            return {
                val: '哈哈',
                groups: ['全部', '历史跟随', '正在跟随', '哈哈']
            }
        },

        watch: {
            val (value) {
                console.log('rbg value', value);
            }
        }
    }
</script>

## RadioButtonGroup 按钮组

### 基础用法

::: demo 基本用法
```html
    <fm-radio-button-group v-model="val" :data-source="groups"></fm-radio-button-group> 
    <script>
        export default {
            data () {
                return {
                    val: '哈哈',
                    groups: ['全部', '历史跟随', '正在跟随', '哈哈']
                    // 等同于 [{label: '全部', value: '全部'}, ...]
                }
            }
        }
    </script>    
```
:::

### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :--------------------------------  | :-------- |
| value | 绑定值 | - | - | - |
| data-source | 用于渲染按钮组 | array | - | [] |
| button-width | 按钮最小宽度 | number | — | 50 |


### 事件
| 事件名称	      | 说明          | 回调参数 |
| :---------- | :-------------- | :---------- |
| change | 选项改变时触发 | 选择的 value |
