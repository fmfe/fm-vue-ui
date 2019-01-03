<script>
  import { Notification } from 'main/index';
  export default {
    methods: {
        showNotification(flag) {
            const type = ['success', 'info', 'warning', 'error'][flag -1]
            Notification({
                duration: 1500,
                type: type,
                title: type,
                message: '我是Notification内容我是Notification内容我是Notification内容我是Notification内容我是Notification内容我是Notification内容我是Notification内容我是Notification内容'
            });
        },
        // 点击才关闭
        showNotificationNotCloseAuto(flag) {
            Notification({
                duration: 0,
                type: 'error',
                title: '错误',
                message: '我是Notification内容并且需要用户主动关闭'
            });
        },
    }
  }
</script>
## Notification 对话框
从网页顶部弹出一个提示框。

### 基本用法

Notification 弹出一个提示框，适合提醒用户任务操作结果等。

:::demo Notification 以 `$fmtoast` 属性挂载在 Vue Components 上, 可以在组件内通过 `this.$fmtoast` 的方式直接调用。

```html
<fm-button @click="showNotification(1)">成功</fm-button>
<fm-button @click="showNotification(2)">信息</fm-button>
<fm-button @click="showNotification(3)">警告</fm-button>
<fm-button @click="showNotification(4)">错误</fm-button>

<script>
  export default {
    methods: {
        showNotification(type) {
            this.$fmtoast({
                duration: 1500,
                type: type,
                message: '我是Notification内容我是Notification内容'
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
<fm-button @click="showNotificationNotCloseAuto">不自动关闭</fm-button>

<script>
  export default {
    methods: {
        showNotificationNotCloseAuto() {
            this.$fmtoast({
                duration: 0,
                type: 'error',
                message: '我是Notification内容并且需要用户主动关闭'
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
| classes | 用于 Notification 的类名 | string | - | '' |
| type | 类型 |  string | success/info/warning/error | '' |
| title | 标题 |  string | string | '' |
| duration | 自动关闭的时间  设置为 0 则点击关闭 |  number | - | `3000` |
| message | 消息体 |  string | - | '' |
| onClose | 点击关闭的事件 |  function | - | - |
