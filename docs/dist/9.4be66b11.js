webpackJsonp([9],{264:function(t,s,a){t.exports=a(288)},288:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[t._m(0,!1,!1),t._v(" "),a("p",[t._v("当选项过多时，使用下拉菜单展示并选择内容。")]),t._v(" "),t._m(1,!1,!1),t._v(" "),a("p",[t._v("适用广泛的基础单选")]),t._v(" "),a("docs-demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("fm-select",{model:{value:t.val,callback:function(s){t.val=s},expression:"val"}},t._l(t.options2,function(t,s){return a("fm-option",{key:s,attrs:{value:t.value,label:t.label}})})),t._v(" "),a("fm-select",{model:{value:t.val2,callback:function(s){t.val2=s},expression:"val2"}},[a("fm-option",{attrs:{value:"",label:"全部"}}),t._v(" "),t._l(t.options,function(t,s){return a("fm-option",{key:s,attrs:{value:t,label:t}})})],2)],1),t._v(" "),a("p",[a("code",[t._v("v-model")]),t._v(" 的值为当前被选中的 "),a("code",[t._v("fm-option")]),t._v(" 的 "),a("code",[t._v("value")]),t._v(" 属性值")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-select")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"val"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-option")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"(item, index) in options2"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"index"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"item.value"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":label")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"item.label"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-option")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-select")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-select")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"val2"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-option")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('""')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("label")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"全部"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-option")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-option")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"(item, index) in options"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"index"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"item"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":label")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"item"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-option")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-select")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n    "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n        data () {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("val")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("val2")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'选择2'")]),t._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("options")]),t._v(": ["),a("span",{attrs:{class:"hljs-string"}},[t._v("'选择1'")]),t._v(", "),a("span",{attrs:{class:"hljs-string"}},[t._v("'选择2'")]),t._v(", "),a("span",{attrs:{class:"hljs-string"}},[t._v("'选择3'")]),t._v("],\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("options2")]),t._v(": [\n                    { "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(", "),a("span",{attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'展示给跟随者'")]),t._v(" },\n                    { "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(", "),a("span",{attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'不展示给跟随者'")]),t._v(" }\n                ]\n            }\n        }\n    }\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])]),t._v(" "),t._m(2,!1,!1),t._v(" "),a("docs-demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("fm-select",{attrs:{disabled:""}},t._l(t.options,function(t,s){return a("fm-option",{key:s,attrs:{value:t,label:t}})}))],1),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("disabled")]),t._v(" 属性指定是否禁用 select 组件")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-html"}},[t._v("    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-select")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-option")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"(item, index) in options"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"index"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"item"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":label")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"item"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-option")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("fm-select")]),t._v(">")]),t._v("   \n")])])]),t._v(" "),t._m(3,!1,!1),t._v(" "),t._m(4,!1,!1),t._v(" "),t._m(5,!1,!1),t._v(" "),t._m(6,!1,!1),t._v(" "),t._m(7,!1,!1),t._v(" "),t._m(8,!1,!1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"select-xuan-ze-qi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#select-xuan-ze-qi","aria-hidden":"true"}},[this._v("¶")]),this._v(" Select 选择器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"ji-chu-yong-fa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa","aria-hidden":"true"}},[this._v("¶")]),this._v(" 基础用法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"jin-yong-zhuang-tai"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong-zhuang-tai","aria-hidden":"true"}},[this._v("¶")]),this._v(" 禁用状态")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"select-shu-xing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#select-shu-xing","aria-hidden":"true"}},[this._v("¶")]),this._v(" Select 属性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[this._v("参数")]),this._v(" "),s("th",{staticStyle:{"text-align":"left"}},[this._v("说明")]),this._v(" "),s("th",{staticStyle:{"text-align":"left"}},[this._v("类型")]),this._v(" "),s("th",{staticStyle:{"text-align":"left"}},[this._v("可选值")]),this._v(" "),s("th",{staticStyle:{"text-align":"left"}},[this._v("默认值")])])]),this._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[this._v("value")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("绑定值")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("string/number/boolean")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("-")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("-")])]),this._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[this._v("disabled")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("是否禁用")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("boolean")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("false")])]),this._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[this._v("placeholder")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("输入框占位文本")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("string")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("请选择/Please select")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"option-shu-xing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#option-shu-xing","aria-hidden":"true"}},[this._v("¶")]),this._v(" Option 属性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[this._v("参数")]),this._v(" "),s("th",{staticStyle:{"text-align":"left"}},[this._v("说明")]),this._v(" "),s("th",{staticStyle:{"text-align":"left"}},[this._v("类型")]),this._v(" "),s("th",{staticStyle:{"text-align":"left"}},[this._v("可选值")]),this._v(" "),s("th",{staticStyle:{"text-align":"left"}},[this._v("默认值")])])]),this._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[this._v("value")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("选项的值, 若该值为假则与 "),s("code",{pre:!0},[this._v("label")]),this._v(" 相同")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("string/number/boolean")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("-")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("-")])]),this._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[this._v("label")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("选项的标签，若不设置则默认与 "),s("code",{pre:!0},[this._v("value")]),this._v(" 相同")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("string/number")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("-")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"shi-jian"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shi-jian","aria-hidden":"true"}},[this._v("¶")]),this._v(" 事件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[this._v("事件名称")]),this._v(" "),s("th",{staticStyle:{"text-align":"left"}},[this._v("说明")]),this._v(" "),s("th",{staticStyle:{"text-align":"left"}},[this._v("回调参数")])])]),this._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[this._v("change")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("选值改变时触发")]),this._v(" "),s("td",{staticStyle:{"text-align":"left"}},[this._v("(value: string | number | boolean)")])])])])}]},e=a(4)({data:function(){return{val:!0,val2:"选择2",options:["选择1","选择2","选择3"],options2:[{value:!0,label:"展示给跟随者"},{value:!1,label:"不展示给跟随者"}]}},mounted:function(){}},l,!1,null,null,null);s.default=e.exports}});
//# sourceMappingURL=9.4be66b11.js.map