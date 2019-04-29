webpackJsonp([15],{246:function(t,s,a){t.exports=a(268)},268:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var l={methods:{showDialog:function(t){this.$fmdialog({type:t?["success","info","warning","error"][t-1]:"",message:"我是对话框内容"})},showMaskDialog:function(){this.$fmdialog({type:"success",message:"我是对话框, 并且带了炫酷的遮罩, 哈哈哈哈",mask:!0})},showInteractionDialog:function(t){this.$fmdialog({message:"有交互行为的对话框",isSingle:t,onConfirm:function(){return alert("点击了确认")}})}}},n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[s._m(0),s._v(" "),a("p",[s._v("在保留当前页面状态的情况下，告知用户并承载相关操作。")]),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("Dialog 弹出一个对话框，适合需要定制性更大的场景。")]),s._v(" "),a("docs-demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("fm-button",{on:{click:function(t){s.showDialog()}}},[s._v("不带Icon的Dialog")]),s._v(" "),a("fm-button",{on:{click:function(t){s.showDialog(1)}}},[s._v("成功")]),s._v(" "),a("fm-button",{on:{click:function(t){s.showDialog(2)}}},[s._v("信息")]),s._v(" "),a("fm-button",{on:{click:function(t){s.showDialog(3)}}},[s._v("警告")]),s._v(" "),a("fm-button",{on:{click:function(t){s.showDialog(4)}}},[s._v("错误")])],1),s._v(" "),a("p",[s._v("Dialog 以 "),a("code",[s._v("$fmdialog")]),s._v(" 属性挂载在 Vue Components 上, 可以在组件内通过 "),a("code",[s._v("this.$fmdialog")]),s._v(" 的方式直接调用。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showDialog()"')]),s._v(">")]),s._v("不带Icon的Dialog"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showDialog(1)"')]),s._v(">")]),s._v("成功"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showDialog(2)"')]),s._v(">")]),s._v("信息"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showDialog(3)"')]),s._v(">")]),s._v("警告"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showDialog(4)"')]),s._v(">")]),s._v("错误"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        showDialog(flag) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$fmdialog({\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": flag === "),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(" ? "),a("span",{attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(" : "),a("span",{attrs:{class:"hljs-string"}},[s._v("'failure'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'我是对话框'")]),s._v("\n            });\n        }\n    }\n  };\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("   \n")])])]),s._v(" "),s._m(2),s._v(" "),a("docs-demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("fm-button",{on:{click:s.showMaskDialog}},[s._v("显示Mask")])],1),s._v(" "),a("p",[a("code",[s._v("mask")]),s._v(" 属性是一个 "),a("code",[s._v("Boolean")]),s._v(" 值, 默认是 "),a("code",[s._v("false")]),s._v(".")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showMaskDialog"')]),s._v(">")]),s._v("显示Mask"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        showMaskDialog() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$fmdialog({\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'我是对话框, 并且带了炫酷的遮罩'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("mask")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n            });\n        }\n    }\n  };\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("   \n")])])]),s._v(" "),s._m(3),s._v(" "),a("docs-demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("fm-button",{on:{click:function(t){s.showInteractionDialog(!1)}}},[s._v("两个按钮")]),s._v(" "),a("fm-button",{on:{click:function(t){s.showInteractionDialog(!0)}}},[s._v("一个按钮")])],1),s._v(" "),a("p",[a("code",[s._v("isSingle")]),s._v(" 属性是一个 "),a("code",[s._v("Boolean")]),s._v(" 值, 默认是 "),a("code",[s._v("false")]),s._v(", 表示是否只显示确认按钮. 显示带交互行为的对话框时, 需要传入 "),a("code",[s._v("onConfirm")]),s._v(" 回调.")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showInteractionDialog(false)"')]),s._v(">")]),s._v("两个按钮"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showInteractionDialog(true)"')]),s._v(">")]),s._v("一个按钮"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-button")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        showInteractionDialog(isSingle) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$fmdialog({\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'有交互行为的对话框'")]),s._v(",\n                isSingle,\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("onConfirm")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" alert("),a("span",{attrs:{class:"hljs-string"}},[s._v("'点击了确认'")]),s._v(")\n            });\n        }\n    }\n  };\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("   \n")])])]),s._v(" "),s._m(4),s._v(" "),s._m(5)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h2",{attrs:{id:"dialog-dui-hua-kuang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dialog-dui-hua-kuang","aria-hidden":"true"}},[t._v("¶")]),t._v(" Dialog 对话框")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"ji-ben-yong-fa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa","aria-hidden":"true"}},[t._v("¶")]),t._v(" 基本用法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("对话框弹出默认是没有后层遮罩的, 如果需要遮罩, 可以设置 "),a("code",{pre:!0},[t._v("mask")]),t._v(" 属性.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("对于对话框需要和用户进行交互的, 不需要指定 "),a("code",{pre:!0},[t._v("type")]),t._v(" 值.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"shu-xing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing","aria-hidden":"true"}},[t._v("¶")]),t._v(" 属性")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mask")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示遮罩")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("classes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用于 Dialog 的类名")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Dialog 的标题")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'请确认'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("success/failure")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("duration")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自动关闭的时间")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1500")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("message")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("消息体")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("''")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cancelBtnText")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取消按钮的文本")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'取消'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("confirmBtnText")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("确认按钮的文本")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'确认'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("isSingle")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示取消按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onCancel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击取消按钮时的回调")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onConfirm")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击确认按钮时的回调")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])}]},e=a(3)(l,n,!1,null,null,null);s.default=e.exports}});
//# sourceMappingURL=15.2d69444c.js.map