webpackJsonp([6],{258:function(s,a,t){s.exports=t(286)},286:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){var s=this;s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",{attrs:{id:"an-zhuang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-zhuang","aria-hidden":"true"}},[s._v("¶")]),s._v(" 安装")]),s._v(" "),t("h3",{attrs:{id:"npm-an-zhuang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-an-zhuang","aria-hidden":"true"}},[s._v("¶")]),s._v(" npm 安装")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[s._v("npm i fm-vue-ui -S\n")])]),s._v(" "),t("h3",{attrs:{id:"yin-ru-fm-icon-toast-dialog-alert-hui-yong-dao-zi-ti-tu-biao-xu-yao-yong-dao-yi-shang-zu-jian-qing-wu-bi-yin-ru"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yin-ru-fm-icon-toast-dialog-alert-hui-yong-dao-zi-ti-tu-biao-xu-yao-yong-dao-yi-shang-zu-jian-qing-wu-bi-yin-ru","aria-hidden":"true"}},[s._v("¶")]),s._v(" 引入 FM-ICON (Toast Dialog Alert 会用到字体图标 需要用到以上组件请务必引入)")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("link")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"https://cdn.followme.com/common/fmfont/style.css"')]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h3",{attrs:{id:"yin-ru-fmui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yin-ru-fmui","aria-hidden":"true"}},[s._v("¶")]),s._v(" 引入 FMUI")]),s._v(" "),t("p",[s._v("可以引入整个 FMUI，或是根据需要仅引入部分组件。")]),s._v(" "),t("h4",{attrs:{id:"wan-zheng-yin-ru"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wan-zheng-yin-ru","aria-hidden":"true"}},[s._v("¶")]),s._v(" 完整引入")]),s._v(" "),t("p",[s._v("在 "),t("code",{pre:!0},[s._v("main.js")]),s._v(" 中写入以下内容：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[s._v("import Vue from 'vue'\nimport FMUI from 'fm-vue-ui'\nimport 'fm-vue-ui/lib/theme-default/index.css'\nimport App from './App.vue'\n\nVue.use(FMUI)\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n})\n")])]),s._v(" "),t("h4",{attrs:{id:"an-xu-yin-ru"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-ru","aria-hidden":"true"}},[s._v("¶")]),s._v(" 按需引入")]),s._v(" "),t("p",[s._v("借助 "),t("a",{attrs:{href:"https://github.com/QingWei-Li/babel-plugin-component"}},[s._v("babel-plugin-component")]),s._v(" 或者 "),t("a",{attrs:{href:"https://github.com/dwqs/babel-plugin-on-demand-import"}},[s._v("babel-plugin-on-demand-import")]),s._v(", 我们可以只引入需要的组件，以达到减小项目体积的目的。")]),s._v(" "),t("p",[s._v("babel-plugin-component配置：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-js"}},[s._v(" "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// .babelrc")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// ....")]),s._v("\n  "),t("span",{attrs:{class:"hljs-string"}},[s._v('"plugins"')]),s._v(": [["),t("span",{attrs:{class:"hljs-string"}},[s._v('"component"')]),s._v(", [\n    {\n      "),t("span",{attrs:{class:"hljs-string"}},[s._v('"libraryName"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"fm-vue-ui"')]),s._v(",\n      "),t("span",{attrs:{class:"hljs-string"}},[s._v('"styleLibraryName"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"theme-default"')]),s._v("\n    }\n  ]]]\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n")])]),s._v(" "),t("p",[s._v("babel-plugin-on-demand-import配置：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-js"}},[t("span",{attrs:{class:"hljs-comment"}},[s._v("// .babelrc")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// ....")]),s._v("\n  "),t("span",{attrs:{class:"hljs-string"}},[s._v('"plugins"')]),s._v(": [[\n    "),t("span",{attrs:{class:"hljs-string"}},[s._v('"on-demand-import"')]),s._v(", {\n      "),t("span",{attrs:{class:"hljs-string"}},[s._v('"libraryName"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"fm-vue-ui"')]),s._v(",\n      "),t("span",{attrs:{class:"hljs-string"}},[s._v('"libraryPath"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"lib"')]),s._v(",\n      "),t("span",{attrs:{class:"hljs-string"}},[s._v('"stylePath"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"lib/theme-default"')]),s._v(",\n      "),t("span",{attrs:{class:"hljs-string"}},[s._v('"needImportStyle"')]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n    }\n  ]]\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n")])]),s._v(" "),t("p",[s._v("接下来，如果你只希望引入部分组件，比如 "),t("code",{pre:!0},[s._v("Button")]),s._v("，那么需要在 "),t("code",{pre:!0},[s._v("main.js")]),s._v(" 中写入以下内容：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[s._v("import Vue from 'vue'\nimport { Button } from 'fm-vue-ui'\nimport App from './App.vue'\n\nVue.component(Button.name, Button)\n/* 或写为\n * Vue.use(Button)\n */\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n})\n")])]),s._v(" "),t("p",[s._v("组件列表以 "),t("a",{attrs:{href:"https://github.com/fmfe/fm-vue-ui/blob/master/components.json"}},[s._v("components.json")]),s._v(" 中列出的为准。")]),s._v(" "),t("h3",{attrs:{id:"ui-ceng-ji-gui-fan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ui-ceng-ji-gui-fan","aria-hidden":"true"}},[s._v("¶")]),s._v(" UI 层级规范")]),s._v(" "),t("ol",[t("li",[s._v("常规元素的 "),t("code",{pre:!0},[s._v("z-index")]),s._v(" 的范围是 [0, 100]")]),s._v(" "),t("li",[s._v("顶部导航、侧边导航等元素的 "),t("code",{pre:!0},[s._v("z-index")]),s._v(" 的范围是 (100, 1000]")]),s._v(" "),t("li",[s._v("遮罩层的 "),t("code",{pre:!0},[s._v("z-index")]),s._v(" 的范围是 (1000, 10000]")]),s._v(" "),t("li",[s._v("弹框、弹层以及toast等元素的 "),t("code",{pre:!0},[s._v("z-index")]),s._v(" 的范围是 (10000, 100000]")])]),s._v(" "),t("h2",{attrs:{id:"gong-xian-zhi-nan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gong-xian-zhi-nan","aria-hidden":"true"}},[s._v("¶")]),s._v(" 贡献指南")]),s._v(" "),t("ol",[t("li",[s._v("可以在 "),t("a",{attrs:{href:"https://github.com/fmfe/fm-vue-ui/issues"}},[s._v("fm-vue-ui")]),s._v(" 以 issue 的形式说明你的需求")]),s._v(" "),t("li",[s._v("fork "),t("a",{attrs:{href:"https://github.com/fmfe/fm-vue-ui"}},[s._v("fm-vue-ui")]),s._v(", 然后开发自己的组件，写好对应的文档说明和单测，提交 PR")]),s._v(" "),t("li",[s._v("代码规范请参考 "),t("a",{attrs:{href:"https://github.com/fmfe/fe-coding-style-guide/"}},[s._v("coding style")])]),s._v(" "),t("li",[s._v("对于组件中涉及的图标，请优先使用 CSS 来实现; 如果实现不了, 请将对应的图片资源放在 CDN 上")])]),s._v(" "),t("h2",{attrs:{id:"kai-fa-bu-zou"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kai-fa-bu-zou","aria-hidden":"true"}},[s._v("¶")]),s._v(" 开发步骤")]),s._v(" "),t("ol",[t("li",[s._v("在 "),t("code",{pre:!0},[s._v("components.json")]),s._v(" 文件中添加对应组件的映射(组件名和组件路径)")]),s._v(" "),t("li",[s._v("在 "),t("code",{pre:!0},[s._v("components")]),s._v(" 目录下按格式建立自己的组件目录，对应的样式在 "),t("code",{pre:!0},[s._v("theme-default/src")]),s._v(" 目录下，文件名和映射的组件名保持一致")]),s._v(" "),t("li",[s._v("执行 "),t("code",{pre:!0},[s._v("npm run com")])])])])}]},e=t(3)(null,n,!1,null,null,null);a.default=e.exports}});
//# sourceMappingURL=6.8633996a.js.map