## 安装
### npm 安装
```
npm i fm-vue-ui -S
```

### 引入 FMUI
可以引入整个 FMUI，或是根据需要仅引入部分组件。

#### 完整引入

在 `main.js` 中写入以下内容：

```html
import Vue from 'vue'
import FMUI from 'fm-vue-ui'
import 'fm-vue-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(FMUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

#### 按需引入
借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 `babel-plugin-component`：

```
npm install babel-plugin-component -D
```

然后，将 `.babelrc` 修改为：

```js
"presets": [
    [
      "env", {
        "targets": {
          "browsers": ["last 5 versions", "safari > 8"]
        },
        "modules": false,
        "useBuiltIns": "entry",
        "loose": true
      }
    ],
    "stage-2"
  ],
  "plugins": [["component", [
    {
      "libraryName": "fm-vue-ui",
      "styleLibraryName": "theme-default"
    }
  ]]]
```

接下来，如果你只希望引入部分组件，比如 `Button`，那么需要在 `main.js` 中写入以下内容：

```html
import Vue from 'vue'
import { Button } from 'fm-vue-ui'
import App from './App.vue'

Vue.component(Button.name, Button)
/* 或写为
 * Vue.use(Button)
 */

new Vue({
  el: '#app',
  render: h => h(App)
})
```

组件列表以 [components.json](https://github.com/fmfe/fm-vue-ui/blob/master/components.json) 中列出的为准。

### UI 层级规范
1. 常规元素的 `z-index` 的范围是 [0, 100]
2. 顶部导航、侧边导航等元素的 `z-index` 的范围是 (100, 1000]
3. 遮罩层的 `z-index` 的范围是 (1000, 10000]
4. 弹框、弹层以及toast等元素的 `z-index` 的范围是 (10000, 100000]

## 贡献指南

1. 可以在 [fm-vue-ui](https://github.com/fmfe/fm-vue-ui/issues) 以 issue 的形式说明你的需求
2. fork [fm-vue-ui](https://github.com/fmfe/fm-vue-ui), 然后开发自己的组件，写好对应的文档说明和单测，提交 PR
3. 代码规范请参考 [coding style](https://github.com/fmfe/fe-coding-style-guide/)
4. 对于组件中涉及的图标，请优先使用 CSS 来实现; 如果实现不了, 请将对应的图片资源放在 CDN 上