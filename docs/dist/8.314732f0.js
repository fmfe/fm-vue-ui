webpackJsonp([8],{275:function(t,s,a){t.exports=a(303)},303:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[s._m(0),s._v(" "),a("p",[s._v("从网页顶部弹出一个提示框。")]),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("Toast 弹出一个提示框，适合提醒用户任务操作结果等。")]),s._v(" "),a("docs-demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("fm-button",{on:{click:function(t){return s.showToast(1)}}},[s._v("成功")]),s._v(" "),a("fm-button",{on:{click:function(t){return s.showToast(2)}}},[s._v("信息")]),s._v(" "),a("fm-button",{on:{click:function(t){return s.showToast(3)}}},[s._v("警告")]),s._v(" "),a("fm-button",{on:{click:function(t){return s.showToast(4)}}},[s._v("错误")])],1),s._v(" "),a("p",[s._v("Toast 以 "),a("code",[s._v("$fmtoast")]),s._v(" 属性挂载在 Vue Components 上, 可以在组件内通过 "),a("code",[s._v("this.$fmtoast")]),s._v(" 的方式直接调用。")]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"showToast(1)"')]),s._v(">")]),s._v("成功"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"showToast(2)"')]),s._v(">")]),s._v("信息"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"showToast(3)"')]),s._v(">")]),s._v("警告"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"showToast(4)"')]),s._v(">")]),s._v("错误"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        showToast(type) {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$fmtoast({\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("duration")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1500")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": type,\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'我是Toast内容我是Toast内容'")]),s._v("\n            });\n        }\n    }\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("   \n")])])]),s._v(" "),s._m(2),s._v(" "),a("docs-demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("fm-button",{on:{click:s.showToastNotCloseAuto}},[s._v("不自动关闭")])],1),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"showToastNotCloseAuto"')]),s._v(">")]),s._v("不自动关闭"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        showToastNotCloseAuto() {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$fmtoast({\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("duration")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'error'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'我是Toast内容并且需要用户主动关闭'")]),s._v("\n            });\n        }\n    }\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),s._m(3),s._v(" "),s._m(4)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h2",{attrs:{id:"toast-dui-hua-kuang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toast-dui-hua-kuang","aria-hidden":"true"}},[t._v("¶")]),t._v(" Toast 对话框")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"ji-ben-yong-fa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa","aria-hidden":"true"}},[t._v("¶")]),t._v(" 基本用法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("可以指定关闭事件 也可以通过传递 "),a("code",{pre:!0},[t._v("duration: 0")]),t._v(" 使得只能用户主动点击才关闭")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"shu-xing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing","aria-hidden":"true"}},[t._v("¶")]),t._v(" 属性")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("classes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用于 Toast 的类名")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("success/info/warning/error")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("duration")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自动关闭的时间  设置为 0 则点击关闭")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",{pre:!0},[t._v("3000")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("message")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息体")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onClose")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击关闭的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])}]},l=a(4)({methods:{showToast:function(t){var s=["success","info","warning","error"][t-1];this.$fmtoast({duration:1500,type:s,message:"我是Toast内容"})},showToastNotCloseAuto:function(t){this.$fmtoast({duration:0,type:"error",message:"我是Toast内容并且需要用户主动关闭"})}}},e,!1,null,null,null);s.default=l.exports}});
//# sourceMappingURL=8.314732f0.js.map