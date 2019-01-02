## 安装
### npm 安装
```
npm i fm-vue-ui -S
```
### 引入 FM-ICON (Toast Dialog Alert 会用到字体图标 需要用到以上组件请务必引入)
```html
<link rel="stylesheet" href="https://cdn.followme.com/common/fmfont/style.css">
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
借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component) 或者 [babel-plugin-on-demand-import](https://github.com/dwqs/babel-plugin-on-demand-import), 我们可以只引入需要的组件，以达到减小项目体积的目的。



babel-plugin-component配置：

```js
 // .babelrc
  // ....
  "plugins": [["component", [
    {
      "libraryName": "fm-vue-ui",
      "styleLibraryName": "theme-default"
    }
  ]]]
  // ...
```

babel-plugin-on-demand-import配置：

```js
// .babelrc
  // ....
  "plugins": [[
    "on-demand-import", {
      "libraryName": "fm-vue-ui",
      "libraryPath": "lib",
      "stylePath": "lib/theme-default",
      "needImportStyle": true
    }
  ]]
  // ...
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
## 开发步骤

1. 在 `components.json` 文件中添加对应组件的映射(组件名和组件路径)
2. 在 `components` 目录下按格式建立自己的组件目录，对应的样式在 `theme-default/src` 目录下，文件名和映射的组件名保持一致
3. 执行 `npm run com` 
