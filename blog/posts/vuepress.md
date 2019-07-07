---
title: vuepress 踩坑记录
lang: zh-CN
display: home
description: 记录使用 vuepress 以来的一些心得
image: https://picsum.photos/1920/1080/?random&date=2019-07-07
date: 2019-07-07
tags:
  - vue
  - vuepress
categories:
  - summary
--- 

记录使用 [vuepress](https://v1.vuepress.vuejs.org) 以来所遇到的坑及解决办法

<!-- more -->

1. 修改 build 的输出目录

`vuepress` 的默认输出目录在 `.vuepress/dist` 不是很方便，可以通过下面方法改写输出目录

``` js
// .vuepress/config.js
module.exports = {
  // ...
  dest: 'dist/'
}
```

2. 使用 `vuepress-plugin-sitemap` 报错

主要是由于 `@vuepress/last-updated` 插件将 `lastUpdated` 编译为 `lang` 所在时间格式。转换后的中文时间格式没有办法被 `vuepress-plugin-sitemap` 识别引起的

``` js
// .vuepress/config.js
module.exports = {
  // ...
  plugins: [
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        return new Date(timestamp).toISOString()
      }
    }]
  ]
}
```

3. 为你的主题增加自定义容器

使用 `vuepress-plugin-container` 来增加自定义容器

::: tip
默认主题是自带的，其他需要自己手动增加
:::

``` js
// .vuepress/config.js
module.exports = {
  // ...
  plugins: [
    ['container', {
      type: 'tip',
      before: info => `<div class="tip"><p class="title">${info}</p>`,
      after: '</div>'
    }]
  ]
}
```
[参考](https://github.com/tolking/blog/blob/master/blog/.vuepress/config.js)
``` styl
/* .vuepress/styles/index.styl */
.tip
  padding 1rem 1.5rem
  border-left-width .5rem
  border-left-style solid
  margin 1rem 0
  background-color #f3f5f7
  border-color #42b983
  .title
    font-weight bold
```
[参考](https://github.com/tolking/blog/blob/master/blog/.vuepress/styles/index.styl)

4. GitHub Pages and Travis CI 自动化部署

