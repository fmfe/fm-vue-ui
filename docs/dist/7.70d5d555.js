webpackJsonp([7],{263:function(s,a,t){s.exports=t(288)},288:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={methods:{avatarError:function(s){return this.$fmutils.avatarError(s)},avatarError2:function(s){return this.$fmutils.avatarError(s,"//www.followme.com/portalindex/assets/logo.png")},getCurDate:function(){return new Date("2017-12-05T04:26:07.584Z")},formatDate:function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.$fmutils.formatDateToStr(new Date("2017-12-05T04:26:07.584Z"),s)}}},n={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[s._m(0,!1,!1),s._v(" "),t("p",[s._v("常用的工具函数。")]),s._v(" "),s._m(1,!1,!1),s._v(" "),s._m(2,!1,!1),s._v(" "),s._m(3,!1,!1),s._v(" "),s._m(4,!1,!1),s._v(" "),s._m(5,!1,!1),s._v(" "),s._m(6,!1,!1),s._v(" "),t("docs-demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("img",{attrs:{src:"xxx.png"},on:{error:s.avatarError}}),s._v(" "),t("img",{attrs:{src:"xxx.png"},on:{error:s.avatarError2}})]),s._v(" "),t("p",[s._v("用于图像加载失败时显示统一的默认图像。默认图像是 Base64 格式的。也可以指定一个 url。")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("img")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"xxx.png"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@error")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"avatarError"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("img")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("img")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"xxx.png"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@error")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"avatarError2"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("img")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        avatarError() {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$fmutils.avatarError(e);\n        },\n\n        avatarError2 () {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$fmutils.avatarError(e, "),t("span",{attrs:{class:"hljs-string"}},[s._v("'//www.followme.com/portalindex/assets/logo.png'")]),s._v(");\n        }\n    }\n  };\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("   \n")])])]),s._v(" "),s._m(7,!1,!1),s._v(" "),t("docs-demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("p",[s._v("默认的当前时间格式："),t("span",{domProps:{textContent:s._s(s.getCurDate())}})]),s._v(" "),t("p",[s._v("默认输出的格式化时间："),t("span",[s._v(s._s(s.formatDate()))])]),s._v(" "),t("p",[s._v("指定格式输出："),t("span",[s._v(s._s(s.formatDate("yyyy/MM/dd hh:mm:ss")))])]),s._v(" "),t("p",[s._v("只输出时间："),t("span",[s._v(s._s(s.formatDate("hh:mm:ss")))])]),s._v(" "),t("p",[s._v("(只有一个 M/m/h/m/s等时)不加0："),t("span",[s._v(s._s(s.formatDate("hh:mm:s")))])])]),s._v(" "),t("p",[s._v("接受一个 Date 实例和格式输出。默认的输出格式是 "),t("code",[s._v("yyyy-MM-dd")]),s._v("。")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("默认的当前时间格式："),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-text")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"getCurDate()"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("默认输出的格式化时间："),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("{{formatDate()}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("指定格式输出："),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("{{formatDate('yyyy/MM/dd hh:mm:ss')}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("只输出时间："),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("{{formatDate('hh:mm:ss')}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("(只有一个 M/m/h/m/s等时)不加0："),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("{{formatDate('hh:mm:s')}}"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        getCurDate() {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v('"2017-12-05T04:26:44.584Z"')]),s._v(");\n        },\n\n        formatDate (formatStr = "),t("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(") {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$fmutils.formatDateToStr("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v('"2017-12-05T04:26:44.584Z"')]),s._v("), formatStr);\n        }\n    }\n  };\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("   \n")])])]),s._v(" "),s._m(8,!1,!1),s._v(" "),s._m(9,!1,!1),s._v(" "),s._m(10,!1,!1),s._v(" "),s._m(11,!1,!1)],1)},staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"utils-gong-ju-ku"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utils-gong-ju-ku","aria-hidden":"true"}},[this._v("¶")]),this._v(" Utils 工具库")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"ji-ben-shi-yong"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-shi-yong","aria-hidden":"true"}},[this._v("¶")]),this._v(" 基本使用")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("在 "),a("code",{pre:!0},[this._v("main.js")]),this._v(" 中写入以下内容：")])},function(){var s=this.$createElement,a=this._self._c||s;return a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-html"}},[this._v("import Vue from 'vue'\nimport App from './App.vue'\n\n// 按需引入时需要手动引入 utils，全量引入会挂载在 $fmutils\nimport fmutils from fm-vue-ui/lib/utils/index';\nVue.prototype.$fmutils = fmutils;\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n})\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("fmutils")]),this._v(" 目前提供的 API 列表如下:")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-js"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    formatDateToStr,  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 时间格式化")]),s._v("\n    avatarError,  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 设置图像加载失败时的默认图像")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 下面三个是对 Storage 的封装, 均提供 set/get/remove/clear/getAll 五个 api")]),s._v("\n    localStorage,  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// ==> window.localStorage")]),s._v("\n    sessionStorage, "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// ==> window.sessionStorage")]),s._v("\n    memoryStorage "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// ==> 存在内存中的一个 map 对象")]),s._v("\n};\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"mo-ren-tu-xiang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mo-ren-tu-xiang","aria-hidden":"true"}},[this._v("¶")]),this._v(" 默认图像")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"shi-jian-ge-shi-hua-shu-chu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shi-jian-ge-shi-hua-shu-chu","aria-hidden":"true"}},[this._v("¶")]),this._v(" 时间格式化输出")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"storage-cao-zuo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-cao-zuo","aria-hidden":"true"}},[this._v("¶")]),this._v(" Storage 操作")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",{pre:!0},[s._v("localStorage")]),s._v(" 和 "),t("code",{pre:!0},[s._v("sessionStorage")]),s._v(" 仅是对 "),t("code",{pre:!0},[s._v("window.localStorage")]),s._v(" 和 "),t("code",{pre:!0},[s._v("window.sessionStorage")]),s._v(" 的一个封装：")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-js"}},[t("span",{attrs:{class:"hljs-comment"}},[s._v("// 写入的 key 均会有私有前缀 _fm_")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$fmutils.localStorage.set("),t("span",{attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'test'")]),s._v(");  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 写")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$fmutils.localStorage.get("),t("span",{attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v("); "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 读 => 'test'")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$fmutils.localStorage.set("),t("span",{attrs:{class:"hljs-string"}},[s._v("'name2'")]),s._v(", "),t("span",{attrs:{class:"hljs-string"}},[s._v("'test2'")]),s._v("); \n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$fmutils.localStorage.getAll(); "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 读取所有 => {name: 'test', name2: 'test2'}")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$fmutils.localStorage.remove("),t("span",{attrs:{class:"hljs-string"}},[s._v("'name2'")]),s._v("); "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 清除指定的 key")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$fmutils.localStorage.clear(); "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 清除所有 key")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("strong",[this._v("需要注意的是 "),a("code",{pre:!0},[this._v("memoryStorage")]),this._v(" 只是内存中的一个对象，可用于临时存储应用数据，但不可用于持久化数据。")])])}]},e=t(4)(r,n,!1,null,null,null);a.default=e.exports}});
//# sourceMappingURL=7.70d5d555.js.map