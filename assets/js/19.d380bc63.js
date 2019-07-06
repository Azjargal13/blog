(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{158:function(e,a,s){"use strict";s.r(a);var l=s(3),t=Object(l.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("使用babel-polyfill来解决一些低版本的浏览器对es6新语法的不支持")]),e._v(" "),s("ol",[s("li",[e._v("引入 babel-polyfill")])]),e._v(" "),s("ul",[s("li",[e._v("对于通过vue-cli构建的项目(其他同理)")]),e._v(" "),s("li",[e._v("引入babel-polyfill到你的项目中")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install --save-dev babel-polyfill\n")])])]),s("ul",[s("li",[e._v("在你的入口文件main.js中引入babel-polyfill")])]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// src -> main.js")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'babel-polyfill'")]),e._v("\n")])])]),s("ul",[s("li",[e._v("修改webpack的配置文件")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// build -> webpack.base.conf.js\nentry: {\n  // app: './src/main.js'\n  app: ['babel-polyfill', './src/main.js']\n}\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("测试你的项目，如果低版本浏览器能够打开就不用继续下面步骤。如果编译错误，可以测试下面方法")])]),e._v(" "),s("ul",[s("li",[e._v("继续修改配置文件")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// build -> webpack.base.conf.js\nrules: [\n  // {\n  //   test: /\\.js$/,\n  //   loader: 'babel-loader',\n  //   include: [resolve('src'), resolve('test')]\n  // },\n  {\n    test: /\\.js$/,\n    use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],\n    exclude: /node_modules(?!\\/webpack-dev-server)/\n  }\n]\n")])])]),s("ul",[s("li",[e._v("将webpack-dev-server的版本回退到2.7.1")]),e._v(" "),s("li",[e._v("先卸载webpack-dev-server")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm uninstall webpack-dev-server\n")])])]),s("ul",[s("li",[e._v("在安装指定版本的webpack-dev-server")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install --save-dev webpack-dev-server@2.7.1\n")])])])])},[],!1,null,null,null);a.default=t.exports}}]);