(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{159:function(e,t,v){"use strict";v.r(t);var n=v(3),r=Object(n.a)({},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("之前沉迷 "),v("a",{attrs:{href:"https://www.minecraft.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("minecraft"),v("OutboundLink")],1),e._v("，起初是玩游戏时觉得下界交通太复杂，容易迷失方向。于是就想统计一份线性地图来提供参考。最初只是简单的图片，但随着服务器肝帝愈来愈多，这种简单的图片已经满足不了数据更新的需求("),v("strong",[e._v("手动统计加上绘图实在太麻烦了")]),e._v(")")]),e._v(" "),v("p",[e._v("于是根据自己掌握的知识，打算写一个网页版的线性地图。最初的候选方案有 "),v("code",[e._v("svg")]),e._v(" 和 "),v("code",[e._v("canvas")]),e._v("，两者都各具优势和缺点。")]),e._v(" "),v("p",[e._v("就我掌握的知识来说：svg 可以直接渲染在 dom 节点里面，能够直接用 css 修改样式，能够利用 js 控制，性能可能会比 canvas 好很多；")]),e._v(" "),v("p",[e._v("而 canvas 相比貌似没有多少优势，只是会有更多的可能性。于是我选择基于 canvas 来制作，更多可能性能够更好的面对未来，也有可能突发脑洞写一些没用的功能。")]),e._v(" "),v("p",[e._v("由于平时很少写原生的 js，于是计划用原生写，尽量全部自己写，不使用其它库。由于主要面向年轻人，所以没有考虑做多少兼容，直接上新技术。由于没有服务器，页面就打算放在 github page，通过 json 存储地图数据，通过 git 同步代码实现增量更新，对于维护来说轻松太多了。")]),e._v(" "),v("p",[e._v("整体的方案确定，先写个小 dome 测试可行性，测试时发现如果使用 github 提供的域名，则无法获取 JSON 数据，好在我有自己的域名，绑定了自己的二级域名后，访问数据成功。由此基础的测试就完成了！")]),e._v(" "),v("p",[e._v("于是开始具体的构建工作，大体流程：")]),e._v(" "),v("p",[e._v("获取默认加载项—> 请求json数据—> 解析json数据—> 绘制地图")]),e._v(" "),v("p",[e._v("使用一个数组来储存地图数据列表，加载页面时，将数组渲染到下拉列表里面，通过用户手动切换列表改变显示的数据源。")]),e._v(" "),v("p",[e._v("通过封装的 "),v("code",[e._v("Promise")]),e._v(" 对象实现异步加载选择地图源数据。然后调用 then() 来初始化绘制并调用绘制地图。")]),e._v(" "),v("p",[e._v("加入移动、放大缩小功能：由于手机是双指缩放，不了解，所以引用了唯一的第三方库 "),v("code",[e._v("hammer")]),e._v(" 。使用 hammer 来识别双指缩放，同时完成检测移动操作。这样就只剩 pc 的缩放功能了，写一个方法检测鼠标滚轮的滚动，通过判断滚轮的方向实现放大缩小的检查，执行相关的代码。")]),e._v(" "),v("p",[e._v("由于地图是实时绘制的，大量的缩放和移动操作引起了地图的严重卡顿（特别是手机），所以就加入了 "),v("code",[e._v("transform 3D")]),e._v("（tranform 3D 相比于 transform 来说会调用硬件加速功能，可能会带来更好的效果）。缩放和移动首先通过 transform 3D 来控制 canvas 实现，然后在操作完成后再绘制地图。这样一定程度地解决卡顿问题，但由于没有实时绘制地图，在移动和缩放的过程中会引起在新区域产生空白等等问题。")]),e._v(" "),v("p",[e._v("关于数据格式的设计：考虑到不是所有的线路都是直线，也有很多曲线的线路，所以计划使用 lineTo 和 quadraticCurveTo 配合的方式绘制线路。给曲线一个type值表示，然后使用贝塞尔曲线绘制这段线段，没有type值的，直接使用 lineTo 绘制。")]),e._v(" "),v("p",[e._v("为了更好的维护地图数据，将每条线路的数据分开，一条线的所有数据都集中在一起。这样就产生了一个问题，由于数据是依次绘制，引起了线路文字被后面的数据覆盖的情况，所以就手动将数据分类集中，按分类的重要性排列数据，然后单独的绘制文字。")]),e._v(" "),v("p",[e._v("由于需要标明分类的区别和类型，所以延续了之前使用的颜色来区别。突然想到了 input type=“color” 既能够显示颜色信息，又能够输入颜色。多点代码就能够实现颜色的自定义，还是很不错的。为了提供恢复初始颜色的功能，和不加更多按钮，所以就选择将颜色旁边的文字作为恢复按钮。")]),e._v(" "),v("p",[v("strong",[e._v("总感觉选 canvas 是个巨大失误，如果用 svg 的话，缩放和移动手机直接改下 meta 标签加个 overflow: hidden 就行了，也不会有什么性能问题，真想不通当初为什么要选 canvas")])]),e._v(" "),v("p",[v("a",{attrs:{href:"https://map.ououe.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("​为服务器开发的线性地图"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("a",{attrs:{href:"https://github.com/tolking/map",target:"_blank",rel:"noopener noreferrer"}},[e._v("查看源码"),v("OutboundLink")],1)])])},[],!1,null,null,null);t.default=r.exports}}]);