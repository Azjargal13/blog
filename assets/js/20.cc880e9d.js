(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{130:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("使用 "),t("code",[s._v("babel-polyfill")]),s._v(" 来解决一些低版本的浏览器对es6新语法的不支持")]),s._v(" "),t("ol",[t("li",[s._v("引入 babel-polyfill")])]),s._v(" "),t("ul",[t("li",[s._v("对于通过vue-cli 2.X 构建的项目(其他同理)")]),s._v(" "),t("li",[s._v("引入babel-polyfill到你的项目中")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev babel-polyfill\n")])])]),t("ul",[t("li",[s._v("在你的入口文件main.js中引入babel-polyfill")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// src -> main.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'babel-polyfill'")]),s._v("\n")])])]),t("ul",[t("li",[s._v("修改webpack的配置文件")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// build -> webpack.base.conf.js\nentry: {\n  // app: './src/main.js'\n  app: ['babel-polyfill', './src/main.js']\n}\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("测试你的项目，如果低版本浏览器能够打开就不用继续下面步骤。如果编译错误，可以测试下面方法")])]),s._v(" "),t("ul",[t("li",[s._v("继续修改配置文件")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// build -> webpack.base.conf.js")]),s._v("\nrules"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   test: /\\.js$/,")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   loader: 'babel-loader',")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//   include: [resolve('src'), resolve('test')]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// },")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.js$/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    use"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" loader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'babel-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" cacheDirectory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    exclude"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/node_modules(?!\\/webpack-dev-server)/")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("ul",[t("li",[s._v("将webpack-dev-server的版本回退到2.7.1")]),s._v(" "),t("li",[s._v("先卸载webpack-dev-server")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall webpack-dev-server\n")])])]),t("ul",[t("li",[s._v("在安装指定版本的webpack-dev-server")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev webpack-dev-server@2.7.1\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);