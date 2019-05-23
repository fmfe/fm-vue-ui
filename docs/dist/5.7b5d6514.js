webpackJsonp([5],{264:function(e,n,r){e.exports=r(292)},292:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("section",[r("h2",{attrs:{id:"guo-ji-hua"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#guo-ji-hua","aria-hidden":"true"}},[e._v("¶")]),e._v(" 国际化")]),e._v(" "),r("p",[r("code",{pre:!0},[e._v("fm-vue-ui")]),e._v(" 目前仅支持两种语言: "),r("code",{pre:!0},[e._v("zh-CN")]),e._v("、"),r("code",{pre:!0},[e._v("en-US")]),e._v(" 和 "),r("code",{pre:!0},[e._v("zh-HK")]),e._v("，默认使用 "),r("code",{pre:!0},[e._v("zh-CN")]),e._v("。")]),e._v(" "),r("blockquote",[r("p",[e._v("我们所有的项目都是需要支持国际化的")])]),e._v(" "),r("p",[e._v("如果需要设置其它语言，配置示例如下：")]),e._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"hljs language-html"}},[e._v("// 项目的 i18n 配置 src/i18n/index.js\nimport Vue from 'vue';\nimport VueI18n from 'vue-i18n'; // 7.x\nimport en from './en-US';\nimport cn from './zh-CN';\n\nVue.use(VueI18n);\n\nexport default new VueI18n({\n    locale: 'zh-CN',\n    messages: {\n        'en-US': en,\n        'zh-CN': cn\n    }\n});\n\n// page/index.js\nimport Vue from 'vue';\nimport FMUI from 'fm-vue-ui';\n\nimport i18n from './i18n/index';\n\nVue.use(FMUI, {\n    lang: i18n.locale\n});\n")])]),e._v(" "),r("p",[e._v("如果是按需引入：")]),e._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"hljs language-html"}},[e._v("// 按需引入\nimport Vue from 'vue'\nimport { Button } from 'fm-vue-ui'\nimport locale from 'fm-vue-ui/lib/locale/index';\n\nlocale.use(i18n.locale);\nVue.use(Button); // 然后安装组件\n")])]),e._v(" "),r("p",[e._v("组件内的开发需要考虑国际化文案时，使用案例请参考 "),r("code",{pre:!0},[e._v("Dialog")]),e._v("。")])])}]},t=r(4)(null,o,!1,null,null,null);n.default=t.exports}});
//# sourceMappingURL=5.7b5d6514.js.map