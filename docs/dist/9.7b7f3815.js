webpackJsonp([9],{254:function(t,s,a){t.exports=a(280)},280:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var l={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[s._m(0),s._v(" "),a("p",[s._v("表示两种相互对立的状态间的切换，多用于触发「开/关」。")]),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("基础的开关用法")]),s._v(" "),a("docs-demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("fm-switch",{model:{value:s.val,callback:function(t){s.val=t},expression:"val"}}),s._v(" "),a("fm-switch",{model:{value:s.val2,callback:function(t){s.val2=t},expression:"val2"}})],1),s._v(" "),a("p",[a("code",[s._v("v-model")]),s._v(" 绑定的值是一个 "),a("code",[s._v("Boolean")]),s._v(" 值。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-switch")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"val"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-switch")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-switch")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"val2"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-switch")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n        data () {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("val")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("val2")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n            }\n        }\n    }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),s._m(2),s._v(" "),a("p",[s._v("开关的不可用状态")]),s._v(" "),a("docs-demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("fm-switch",{attrs:{disabled:""},model:{value:s.val3,callback:function(t){s.val3=t},expression:"val3"}}),s._v(" "),a("fm-switch",{attrs:{disabled:""},model:{value:s.val4,callback:function(t){s.val4=t},expression:"val4"}})],1),s._v(" "),a("p",[s._v("设置 "),a("code",[s._v("disabled")]),s._v(" 属性即可。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-switch")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"val3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-switch")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-switch")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"val4"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("fm-switch")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n        data () {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("val3")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("val4")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n            }\n        }\n    }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h2",{attrs:{id:"switch-kai-guan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switch-kai-guan","aria-hidden":"true"}},[t._v("¶")]),t._v(" Switch 开关")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"ji-chu-yong-fa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa","aria-hidden":"true"}},[t._v("¶")]),t._v(" 基础用法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"jin-yong-zhuang-tai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong-zhuang-tai","aria-hidden":"true"}},[t._v("¶")]),t._v(" 禁用状态")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"shu-xing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing","aria-hidden":"true"}},[t._v("¶")]),t._v(" 属性")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("绑定值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h3",{attrs:{id:"shi-jian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shi-jian","aria-hidden":"true"}},[t._v("¶")]),t._v(" 事件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当绑定值变化时触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(event: Event)")])])])])}]},e=a(3)({data:function(){return{val:!1,val2:!0,val3:!0,val4:!1}}},l,!1,null,null,null);s.default=e.exports}});
//# sourceMappingURL=9.7b7f3815.js.map