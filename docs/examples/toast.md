<script>
  export default {
    methods: {
        showToast(flag) {
            const type = ['success', 'info', 'warning', 'error'][flag -1]
            this.$fmtoast({
                duration: 1500,
                type: type,
                message: '我是Toast内容'
            });
        },
        // 点击才关闭
        showToastNotCloseAuto(flag) {
            this.$fmtoast({
                duration: 0,
                type: 'error',
                message: '我是Toast内容并且需要用户主动关闭'
            });
        },
    }
  }
</script>
## Toast 对话框
从网页顶部弹出一个提示框。

### 基本用法

Toast 弹出一个提示框，适合提醒用户任务操作结果等。

:::demo Toast 以 `$fmtoast` 属性挂载在 Vue Components 上, 可以在组件内通过 `this.$fmtoast` 的方式直接调用。

```html
<fm-button @click="showToast(1)">成功</fm-button>
<fm-button @click="showToast(2)">信息</fm-button>
<fm-button @click="showToast(3)">警告</fm-button>
<fm-button @click="showToast(4)">错误</fm-button>

<script>
  export default {
    methods: {
        showToast(type) {
            this.$fmtoast({
                duration: 1500,
                type: type,
                message: '我是Toast内容我是Toast内容'
            });
        }
    }
  };
</script>   
```
:::

可以指定关闭事件 也可以通过传递 `duration: 0` 使得只能用户主动点击才关闭

:::demo 

```html
<fm-button @click="showToastNotCloseAuto">不自动关闭</fm-button>

<script>
  export default {
    methods: {
        showToastNotCloseAuto() {
            this.$fmtoast({
                duration: 0,
                type: 'error',
                message: '我是Toast内容并且需要用户主动关闭'
            });
        }
    }
  };
</script>
```
:::

### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :--------------------------------  | :-------- |
| classes | 用于 Toast 的类名 | string | - | '' |
| type | 类型 |  string | success/info/warning/error | '' |
| duration | 自动关闭的时间  设置为 0 则点击关闭 |  number | - | `3000` |
| message | 消息体 |  string | - | '' |
| onClose | 点击关闭的事件 |  function | - | - |
