<script>
  export default {
    methods: {
        showDialog(flag) {
            const type = ['success','info','warning','error']
            this.$fmdialog({
                type: flag ? type[flag - 1] : '',
                message: '我是对话框内容'
            });
        },

        showMaskDialog () {
            this.$fmdialog({
                type: 'success',
                message: '我是对话框, 并且带了炫酷的遮罩, 哈哈哈哈',
                mask: true
            });
        },

        showInteractionDialog(isSingle) {
            this.$fmdialog({
                message: '有交互行为的对话框',
                isSingle,
                onConfirm: () => alert('点击了确认')
            });
        },
        showDialogWithoutHeader() {
            this.$fmdialog({
                message: '隐藏头部的Dialog',
                hideHeader: true,
                isSingle: true,
                onConfirm: () => alert('点击了确认')
            });
        }
    }
  }
</script>
## Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基本用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::demo Dialog 以 `$fmdialog` 属性挂载在 Vue Components 上, 可以在组件内通过 `this.$fmdialog` 的方式直接调用。

```html
<fm-button @click="showDialog()">不带Icon的Dialog</fm-button>
<fm-button @click="showDialog(1)">成功</fm-button>
<fm-button @click="showDialog(2)">信息</fm-button>
<fm-button @click="showDialog(3)">警告</fm-button>
<fm-button @click="showDialog(4)">错误</fm-button>

<script>
  export default {
    methods: {
        showDialog(flag) {
            this.$fmdialog({
                type: flag === 1 ? 'success' : 'failure',
                message: '我是对话框'
            });
        }
    }
  };
</script>   
```
:::

对话框弹出默认是没有后层遮罩的, 如果需要遮罩, 可以设置 `mask` 属性. 

:::demo `mask` 属性是一个 `Boolean` 值, 默认是 `false`.

```html
<fm-button @click="showMaskDialog">显示Mask</fm-button>

<script>
  export default {
    methods: {
        showMaskDialog() {
            this.$fmdialog({
                type: 'success',
                message: '我是对话框, 并且带了炫酷的遮罩',
                mask: true
            });
        }
    }
  };
</script>   
```
:::

对于对话框需要和用户进行交互的, 不需要指定 `type` 值.

:::demo `isSingle` 属性是一个 `Boolean` 值, 默认是 `false`, 表示是否只显示确认按钮. 显示带交互行为的对话框时, 需要传入 `onConfirm` 回调.

```html
<fm-button @click="showInteractionDialog(false)">两个按钮</fm-button>
<fm-button @click="showInteractionDialog(true)">一个按钮</fm-button>

<script>
  export default {
    methods: {
        showInteractionDialog(isSingle) {
            this.$fmdialog({
                message: '有交互行为的对话框',
                isSingle,
                onConfirm: () => alert('点击了确认')
            });
        }
    }
  };
</script>   
```
:::

对于对话框需要隐藏头部的

:::demo `hideHeader` 属性是一个 `Boolean` 值, 默认是 `false`, 表示是否隐藏头部.

```html
<fm-button @click="showDialogWithoutHeader()">隐藏头部</fm-button>

<script>
  export default {
    methods: {
        showDialogWithoutHeader() {
            this.$fmdialog({
                message: '隐藏头部的Dialog',
                hideHeader: true,
                onConfirm: () => alert('点击了确认')
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
| mask | 是否显示遮罩 | boolean | - | false |
| classes | 用于 Dialog 的类名 | string | - | '' |
| title | Dialog 的标题 |  string | — | '请确认' |
| hideHeader | 是否隐藏头部 |  boolean | — | false |
| type | 类型 |  string | success/failure | '' |
| duration | 自动关闭的时间 |  number | - | 1500 |
| message | 消息体 |  string | - | '' |
| cancelBtnText | 取消按钮的文本 |  string | - | '取消' |
| confirmBtnText | 确认按钮的文本 |  string | - | '确认' |
| isSingle | 是否显示取消按钮 |  boolean | - | false |
| onCancel | 点击取消按钮时的回调 |  function | - | - |
| onConfirm | 点击确认按钮时的回调 |  function | - | - |
