webpackJsonp([4],{274:function(s,t,a){s.exports=a(300)},300:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={data:function(){return{activePanel:0,activePanel2:1,activePanel3:"外汇",tabs:[{value:"外汇",label:"外汇",content:"外汇1"},{value:"贵金属",label:"贵金属",content:"贵金属1"},{value:"指数",label:"指数",content:"指数1"}],delIndex:-1}},watch:{activePanel:function(s){}},methods:{tabClick:function(s,t){},deleteTab:function(s,t){for(var a=[].concat(this.tabs),e=-1,l=0;l<a.length;l++)if(a[l].value===s){e=l;break}if(-1<e&&(this.tabs.splice(e,1),s===this.activePanel3)){var r=a[e+1]||a[e-1];this.activePanel3=r.value}},addTab:function(){var s=this.tabs.length;this.tabs.push({value:this.tabs[s-1]?this.tabs[s-1].value+1:"外汇0",label:"外汇"+(s+1),content:"add"+(s+1)}),1===this.tabs.length&&(this.activePanel3=this.tabs[0].value)}}},l={render:function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("section",[a._m(0),a._v(" "),e("p",[a._v("分隔内容上有关联但属于不同类别的数据集合。")]),a._v(" "),a._m(1),a._v(" "),e("p",[a._v("基础的、简洁的标签页。")]),a._v(" "),e("docs-demo-block",[e("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[e("fm-tabs",{model:{value:a.activePanel,callback:function(s){a.activePanel=s},expression:"activePanel"}},[e("fm-tab-panel",{attrs:{value:0,label:"外汇"}},[a._v("\n        外汇\n    ")]),a._v(" "),e("fm-tab-panel",{attrs:{value:1,label:"贵金属"}},[a._v("\n        贵金属\n    ")]),a._v(" "),e("fm-tab-panel",{attrs:{value:2,label:"指数"}},[a._v("\n        指数\n    ")])],1)],1),a._v(" "),e("p",[a._v("Tabs 组件提供了选项卡功能，默认选中第一个标签页。")]),a._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"hljs language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tabs")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("v-model")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"activePanel"')]),a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":value")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"0"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("label")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"外汇"')]),a._v(">")]),a._v("\n        外汇\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":value")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"1"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("label")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"贵金属"')]),a._v(">")]),a._v("\n        贵金属\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":value")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"2"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("label")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"指数"')]),a._v(">")]),a._v("\n        指数\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(">")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tabs")]),a._v(">")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[a._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("default")]),a._v(" {\n        data () {\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("return")]),a._v(" {\n                "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("activePanel")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("0")]),a._v("\n            }\n        },\n\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("watch")]),a._v(": {\n            activePanel (val) {\n                "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[a._v("console")]),a._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'111111--panel'")]),a._v(", val);\n            }\n        }\n    }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),a._v("\n")])])]),a._v(" "),a._m(2),a._v(" "),e("docs-demo-block",[e("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[e("fm-tabs",{on:{chang:a.tabClick},model:{value:a.activePanel2,callback:function(s){a.activePanel2=s},expression:"activePanel2"}},[e("fm-tab-panel",{attrs:{value:0,label:"外汇"}},[a._v("\n        外汇\n    ")]),a._v(" "),e("fm-tab-panel",{attrs:{value:1,label:"贵金属"}},[a._v("\n        贵金属\n    ")]),a._v(" "),e("fm-tab-panel",{attrs:{value:2,label:"指数"}},[a._v("\n        指数\n    ")])],1)],1),a._v(" "),e("p",[e("code",[a._v("value")]),a._v(" 属性指定默认的选项。")]),a._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"hljs language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tabs")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("v-model")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"activePanel2"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("@chang")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"tabClick"')]),a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":value")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"0"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("label")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"外汇"')]),a._v(">")]),a._v("\n        外汇\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":value")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"1"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("label")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"贵金属"')]),a._v(">")]),a._v("\n        贵金属\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":value")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"2"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("label")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"指数"')]),a._v(">")]),a._v("\n        指数\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(">")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tabs")]),a._v(">")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[a._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("default")]),a._v(" {\n        data () {\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("return")]),a._v(" {\n                "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("activePanel2")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("1")]),a._v("\n            }\n        },\n\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("methods")]),a._v(": {\n            tabClick (val, e) {\n                "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[a._v("console")]),a._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'点击了 tab '")]),a._v(" + val);\n            }\n        }\n    }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),a._v("\n")])])]),a._v(" "),a._m(3),a._v(" "),e("p",[a._v("选项卡样式的标签页。")]),a._v(" "),e("docs-demo-block",[e("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[e("fm-tabs",{attrs:{type:"card"}},[e("fm-tab-panel",{attrs:{value:0,label:"外汇"}},[a._v("\n        外汇\n    ")]),a._v(" "),e("fm-tab-panel",{attrs:{value:1,label:"贵金属"}},[a._v("\n        贵金属\n    ")]),a._v(" "),e("fm-tab-panel",{attrs:{value:2,label:"指数"}},[a._v("\n        指数\n    ")])],1)],1),a._v(" "),e("p",[a._v("只需要设置 "),e("code",[a._v("type")]),a._v(" 属性为 "),e("code",[a._v("card")]),a._v(" 就可以使选项卡改变为标签风格。")]),a._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"hljs language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tabs")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("type")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"card"')]),a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":value")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"0"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("label")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"外汇"')]),a._v(">")]),a._v("\n        外汇\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":value")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"1"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("label")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"贵金属"')]),a._v(">")]),a._v("\n        贵金属\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":value")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"2"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("label")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"指数"')]),a._v(">")]),a._v("\n        指数\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(">")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tabs")]),a._v(">")]),a._v("\n")])])]),a._v(" "),a._m(4),a._v(" "),e("p",[a._v("增减标签页按钮只能在选项卡样式的标签页下使用。")]),a._v(" "),e("docs-demo-block",[e("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[e("div",{staticClass:"btn-wrap"},[e("fm-button",{on:{click:a.addTab}},[a._v(" 添加 tab ")])],1),a._v(" "),e("fm-tabs",{attrs:{type:"card",closable:""},on:{delete:a.deleteTab},model:{value:a.activePanel3,callback:function(s){a.activePanel3=s},expression:"activePanel3"}},a._l(a.tabs,function(s,t){return e("fm-tab-panel",{key:t,attrs:{value:s.value,label:s.label}},[a._v("\n        "+a._s(s.content)+"\n    ")])}),1)],1),a._v(" "),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"hljs language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("div")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("class")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"btn-wrap"')]),a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-button")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("@click")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"addTab"')]),a._v(">")]),a._v(" 添加 tab "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-button")]),a._v(">")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("div")]),a._v(">")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tabs")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("type")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"card"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("v-model")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"activePanel3"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("closable")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("@delete")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"deleteTab"')]),a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("v-for")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"(tab, index) in tabs"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":value")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"tab.value"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":label")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"tab.label"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":key")]),a._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"index"')]),a._v(">")]),a._v("\n        {{tab.content}}\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tab-panel")]),a._v(">")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("fm-tabs")]),a._v(">")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[a._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("default")]),a._v(" {\n        data () {\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("return")]),a._v(" {\n                "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("activePanel3")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'贵金属'")]),a._v(",\n                "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("tabs")]),a._v(": [\n                    {\n                        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("value")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'外汇'")]),a._v(",\n                        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("label")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'外汇'")]),a._v(",\n                        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("content")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'外汇1'")]),a._v("\n                    },\n                    {\n                        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("value")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'贵金属'")]),a._v(",\n                        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("label")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'贵金属'")]),a._v(",\n                        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("content")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'贵金属1'")]),a._v("\n                    },\n                    {\n                        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("value")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'指数'")]),a._v(",\n                        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("label")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'指数'")]),a._v(",\n                        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("content")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'指数1'")]),a._v("\n                    }\n                ],\n                "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("delIndex")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("-1")]),a._v("\n            }\n        },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("methods")]),a._v(": {\n            deleteTab (value, e) {\n                "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("const")]),a._v(" tabs = [].concat("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("this")]),a._v(".tabs);\n                "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("let")]),a._v(" delIndex = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("-1")]),a._v(";\n\n                "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("for")]),a._v(" ("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("let")]),a._v(" i = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("0")]),a._v("; i < tabs.length; i++) {\n                    "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("if")]),a._v(" (tabs[i].value === value) {\n                        delIndex = i;\n                        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("break")]),a._v(";\n                    }\n                }\n                "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("if")]),a._v(" (delIndex > "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("-1")]),a._v(") {\n                    "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("this")]),a._v(".tabs.splice(delIndex, "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("1")]),a._v(");\n                    "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("if")]),a._v(" (value === "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("this")]),a._v(".activePanel3) {\n                        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("const")]),a._v(" nextTab = tabs[delIndex + "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("1")]),a._v("] || tabs[delIndex - "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("1")]),a._v("];\n                        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("this")]),a._v(".activePanel3 = nextTab.value;\n                    }\n                }\n            },\n\n            addTab () {\n                "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("const")]),a._v(" len = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("this")]),a._v(".tabs.length;\n                "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("this")]),a._v(".tabs.push({\n                    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("value")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("this")]),a._v(".tabs[len - "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("1")]),a._v("] ? "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("this")]),a._v(".tabs[len - "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("1")]),a._v("].value + "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("1")]),a._v(" : "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'外汇0'")]),a._v(",\n                    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("label")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'外汇'")]),a._v(" + (len + "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("1")]),a._v("),\n                    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("content")]),a._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'add'")]),a._v(" + (len + "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("1")]),a._v(")\n                });\n                "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("if")]),a._v(" ("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("this")]),a._v(".tabs.length === "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("1")]),a._v(") {\n                    "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("this")]),a._v(".activePanel3 = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("this")]),a._v(".tabs["),e("span",{pre:!0,attrs:{class:"hljs-number"}},[a._v("0")]),a._v("].value;\n                }\n            }\n        }\n    }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),a._v("\n")])])]),a._v(" "),a._m(5),a._v(" "),a._m(6),a._v(" "),a._m(7),a._v(" "),a._m(8),a._v(" "),a._m(9),a._v(" "),a._m(10),a._v(" "),a._m(11),a._v(" "),a._m(12)],1)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"tabs-biao-qian-ye"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabs-biao-qian-ye","aria-hidden":"true"}},[s._v("¶")]),s._v(" Tabs 标签页")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h3",{attrs:{id:"ji-chu-yong-fa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa","aria-hidden":"true"}},[s._v("¶")]),s._v(" 基础用法")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("通过 "),a("code",{pre:!0},[s._v("value")]),s._v(" 属性指定默认的选项：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h3",{attrs:{id:"xuan-xiang-qia-yang-shi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xuan-xiang-qia-yang-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 选项卡样式")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"dong-tai-zeng-jian-biao-qian-ye"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dong-tai-zeng-jian-biao-qian-ye","aria-hidden":"true"}},[this._v("¶")]),this._v(" 动态增减标签页")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"tabs-shu-xing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tabs-shu-xing","aria-hidden":"true"}},[this._v("¶")]),this._v(" Tabs 属性")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("参数")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("type")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("风格类型")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("card/panel")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("panel")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("closable")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("标签是否可关闭")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("boolean")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("-")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("value")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("绑定值，选中选项卡的 index")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string/number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("—")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("第一个选项卡的 index")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"tabs-shi-jian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tabs-shi-jian","aria-hidden":"true"}},[this._v("¶")]),this._v(" Tabs 事件")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("change")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("tab 选择发生变化时触发")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("被选中的标签 tab 的 value")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("delete")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("点击 tab 移除按钮后触发")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("被删除的标签的 value")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"tab-panel-shu-xing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tab-panel-shu-xing","aria-hidden":"true"}},[this._v("¶")]),this._v(" Tab-panel 属性")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("参数")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("value")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("唯一能标识 tab panel 的字段")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string/number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("-")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("-")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("label")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("选项卡标题")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("-")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("-")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"slot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slot","aria-hidden":"true"}},[this._v("¶")]),this._v(" Slot")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("名称")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("outer")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("添加到 nav list 和 tab content 之间的部分")])])])])}]};var r=a(4)(e,l,!1,function(s){a(301)},null,null);t.default=r.exports},301:function(s,t,a){var e=a(302);"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);a(44)("43aade18",e,!0,{})},302:function(s,t,a){(s.exports=a(43)(!1)).push([s.i,".btn-wrap{margin-bottom:15px}",""])}});
//# sourceMappingURL=4.b1fc655a.js.map