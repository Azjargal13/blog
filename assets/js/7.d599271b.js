(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{97:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h3",{attrs:{id:"通过babel-polyfill解决一些低版本的浏览器对es6新语法并不支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过babel-polyfill解决一些低版本的浏览器对es6新语法并不支持","aria-hidden":"true"}},[a._v("#")]),a._v(" 通过babel-polyfill解决一些低版本的浏览器对es6新语法并不支持")]),t("h3",{attrs:{id:"对于通过vue-cli构建的项目-其他同理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对于通过vue-cli构建的项目-其他同理","aria-hidden":"true"}},[a._v("#")]),a._v(" 对于通过vue-cli构建的项目(其他同理)")]),t("h3",{attrs:{id:"引入babel-polyfill到你的项目中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入babel-polyfill到你的项目中","aria-hidden":"true"}},[a._v("#")]),a._v(" 引入babel-polyfill到你的项目中")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install --save-dev babel-polyfill\n")])])]),t("h3",{attrs:{id:"在你的入口文件main-js中引入babel-polyfill"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在你的入口文件main-js中引入babel-polyfill","aria-hidden":"true"}},[a._v("#")]),a._v(" 在你的入口文件main.js中引入babel-polyfill")]),t("h4",{attrs:{id:"src-main-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#src-main-js","aria-hidden":"true"}},[a._v("#")]),a._v(" src -> main.js")]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v("'babel-polyfill'")]),a._v("\n")])])]),t("h3",{attrs:{id:"修改webpack的配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改webpack的配置文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改webpack的配置文件")]),t("h4",{attrs:{id:"build-webpack-base-conf-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-webpack-base-conf-js","aria-hidden":"true"}},[a._v("#")]),a._v(" build -> webpack.base.conf.js")]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("entry"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{attrs:{class:"token comment"}},[a._v("// app: './src/main.js'")]),a._v("\n  app"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{attrs:{class:"token string"}},[a._v("'babel-polyfill'")]),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v("'./src/main.js'")]),t("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"测试你的项目，如果低版本浏览器能够打开就不用继续下面步骤。如果编译错误，可以测试下面方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试你的项目，如果低版本浏览器能够打开就不用继续下面步骤。如果编译错误，可以测试下面方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 测试你的项目，如果低版本浏览器能够打开就不用继续下面步骤。如果编译错误，可以测试下面方法")]),t("h3",{attrs:{id:"继续修改配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#继续修改配置文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 继续修改配置文件")]),t("h4",{attrs:{id:"build-webpack-base-conf-js-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-webpack-base-conf-js-2","aria-hidden":"true"}},[a._v("#")]),a._v(" build -> webpack.base.conf.js")]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("rules"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  "),t("span",{attrs:{class:"token comment"}},[a._v("// {")]),a._v("\n  "),t("span",{attrs:{class:"token comment"}},[a._v("//   test: /\\.js$/,")]),a._v("\n  "),t("span",{attrs:{class:"token comment"}},[a._v("//   loader: 'babel-loader',")]),a._v("\n  "),t("span",{attrs:{class:"token comment"}},[a._v("//   include: [resolve('src'), resolve('test')]")]),a._v("\n  "),t("span",{attrs:{class:"token comment"}},[a._v("// },")]),a._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    test"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token regex"}},[a._v("/\\.js$/")]),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    use"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" loader"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token string"}},[a._v("'babel-loader'")]),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" options"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" cacheDirectory"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    exclude"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{attrs:{class:"token regex"}},[a._v("/node_modules(?!\\/webpack-dev-server)/")]),a._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h3",{attrs:{id:"将webpack-dev-server的版本回退到2-7-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将webpack-dev-server的版本回退到2-7-1","aria-hidden":"true"}},[a._v("#")]),a._v(" 将webpack-dev-server的版本回退到2.7.1")]),t("h3",{attrs:{id:"先卸载webpack-dev-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先卸载webpack-dev-server","aria-hidden":"true"}},[a._v("#")]),a._v(" 先卸载webpack-dev-server")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm uninstall webpack-dev-server\n")])])]),t("h3",{attrs:{id:"在安装指定版本的webpack-dev-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在安装指定版本的webpack-dev-server","aria-hidden":"true"}},[a._v("#")]),a._v(" 在安装指定版本的webpack-dev-server")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npm install --save-dev webpack-dev-server@2.7.1\n")])])])])}],!1,null,null,null);s.default=n.exports}}]);