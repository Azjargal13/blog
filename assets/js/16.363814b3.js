(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{93:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"记录一些遇到的css问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记录一些遇到的css问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 记录一些遇到的css问题")]),a("h3",{attrs:{id:"不同的设备对css的支持不一样，可能出现不同的效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同的设备对css的支持不一样，可能出现不同的效果","aria-hidden":"true"}},[t._v("#")]),t._v(" 不同的设备对css的支持不一样，可能出现不同的效果")]),a("ol",[a("li",[t._v("ios的fixed问题")])]),a("ul",[a("li",[t._v("ios的fixed可能会没有效果，具体可以去搜搜")]),a("li",[t._v("过长的页面会使fixed变为absolute，\b固定的内容就随页面移动了")]),a("li",[t._v("将父级元素改为absolute，或者外层加一个absolute的div")]),a("li",[t._v("将自身的fixed改为absolute")])]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("absolute"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("content"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".absolute")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \b"),a("span",{attrs:{class:"token property"}},[t._v("position")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("top")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("bottom")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v(".content")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("position")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("bottom")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("ios 的底部输入框在输入法弹起后被挡住")])]),a("ul",[a("li",[t._v("噩梦般的存在")]),a("li",[t._v("试了千百种方法，没找到完美的解决办法")]),a("li",[t._v("我的暴力临时方法")]),a("li",[t._v("通过 js 判断是否是 ios 设备，如果是")]),a("li",[t._v("在 input 获取焦点后设置其父级的高度为 当前高度 - 被挡住的高度")]),a("li",[t._v("在 input 失去焦点后恢复其父级的高度")]),a("li",[t._v("如果不是则不变")]),a("li",[t._v("这样很可能有时会使输入法与输入框之间出现间隙")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("行内元素之间多余的间隔")])]),a("ul",[a("li",[t._v("由于html的结构关系，行内元素会出现多余的间隔")]),a("li",[t._v("两个 img 之间也是一样")]),a("li",[t._v("简单的解决办法就是将父级的 font-size 指定为 0px")]),a("li",[t._v("行内元素的间隙就消失了")]),a("li",[t._v("注意：这是行内元素字体的行高也同时消失了")]),a("li",[t._v("需要重新指定行内字体的行高")])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("行内元素的顶部没有对其")])]),a("ul",[a("li",[t._v("需要设置行内元素 vertical-align: top;")]),a("li",[t._v("这时行内元素上面就齐平了")])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("IE 的 backgroun-img 图像消失")])]),a("ul",[a("li",[t._v("设置 display 为 inline-block 或 block 解决")])]),a("ol",{attrs:{start:"6"}},[a("li",[t._v("隐藏 select 的箭头")])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("select")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("appearance")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("select::-ms-expand")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{attrs:{class:"token property"}},[t._v("display")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"7"}},[a("li",[t._v("隐藏 input number 的箭头")])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v('input[type="number"]')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("appearance")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" textfield"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("appearance")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[t._v("设置全局的默认字体样式")])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("body, input, textarea, button, select")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("font-family")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);