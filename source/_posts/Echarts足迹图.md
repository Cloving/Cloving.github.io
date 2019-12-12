---
title: Echarts足迹图
layout: post
date: 2018-12-08 17:31:53
description: 千里之行，始于足下
tags: 
- Echarts
- Javascript
categories: 
- 建站实录
- 足迹图
cover: https://cdn.jsdelivr.net/gh/Cloving/Atlas-Github/blog/CoverPicture/bg_8.png
---

## 摘要
`Echarts`是百度EFE可视化团队开发的基于`Javascript`开源可视化图表库。由于部分blog文章中有展示图表的需求，基于此，本文研究了如何将`Echarts`的图表嵌入到blog中去。
<br/>
## Hexo插件
[hexo-tag-echarts3](https://github.com/kchen0x/hexo-tag-echarts3)是一款在Hexo博客中导入echarts图表的插件。但是它不支持导入地图，同时该插件要求所有渲染的代码都必须在`option`的内部（变量`option`一般用于指定了图表的配置项和数据）。如果有调用外部函数、外部变量的情况，效果可能就不太好。所以对插件进行了修改，支持了地图功能，同时改进了渲染机制，即渲染代码只含有`option`，或者除`option`外还调用了外部的函数的情况都可以成功执行。

<br/>
## 插件修改
### 引入地图
首先需要修改引入的`echarts`文件，因为`echarts`通用包中不含有地图组件，所以必须使用完整包或者[在线定制](http://echarts.baidu.com/builder.html)的方式
```JavaScript
<script type="text/javascript" src="https://cdn.bootcss.com/echarts/4.2.0-rc.2/echarts.min.js"></script>
```

另Echarts现在不能够直接下载地图，所以需要能够找到外部地图js文件。可以从github上下载[China.js](https://github.com/apache/incubator-echarts/blob/master/map/js/china.js)再从本地导入。
例如：下载到`/themes/主题名/source/js/`中，导入方式为：
```JavaScript
<script type="text/javascript" src="/js/echarts.js"></script>
```
或者引用线上文件：
```JavaScript
<script type="text/javascript" src="http://gallery.echartsjs.com/dep/echarts/map/js/china.js"></script>
```
**注意：**根据`<script>`加载机制，引用顺序必须先引入`echarts.js`，后载入地图js文件

<br/>
### 修改渲染方式
修改模板文件`template.html`代码
```javascript
<script type="text/javascript">
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('<%- id %>'));
  // 指定图表的配置项和数据
  <%= sourceCode %>
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
</script>
```

修改`index.js`文件
```JavaScript
function echartsMaps(args, content) {
    var template = fs.readFileSync(filePath).toString(),
        options = {};
    if (content.length) {
        var options = content;
    }
    return _.template(template)({
        id: 'echarts' + ((Math.random() * 9999) | 0),
        sourceCode: content,
        height: args[0] || 400,
        width: args[1] || '85%'
    });
}
```
其中参数`content`为嵌入的代码，以上修改会将嵌入的代码直接渲染，之后调用`myChart.setOption(option);`使用配置项和数据显示图表。
<br/>
## 渲染图

![足迹](https://cdn.jsdelivr.net/gh/Cloving/Atlas-Github/blog/notePicture/hexo-tag-echarts-chart插件/足迹.png)

<br/>
## 总结
本文叙述了如何将`Echarts`的图表嵌入到blog中，由于我需要使用足迹地图并且会调用`option`外部的函数，所以修改了原来的插件。修改后的插件地址：[hexo-tag-echarts-chart](https://github.com/Cloving/hexo-tag-echarts-chart)，欢迎试用。

<br/>
## 参考文献
1、[使用 ECharts3.0 在 Hexo 搭建的博客中建一个足迹👣页面 | Docle の Blog](https://docle.github.io/2018/04/06/Use-ECharts-To-Build-A-[footprint]-Page/)
2、[在 Hexo 中插入 ECharts 动态图表 - KChen's Blog](https://kchen.cc/2016/11/05/echarts-in-hexo/)
3、[谈谈script标签以及其加载顺序问题，包含 defer async  - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000013615988)
4、[浏览器加载 JS 文件的先后顺序同具体的解析和执行有什么关系？ - 知乎](https://www.zhihu.com/question/20531965)
5、[kchen0x/hexo-tag-echarts3: A simple plugin for inserting ECharts 3 by using tags in Hexo](https://github.com/kchen0x/hexo-tag-echarts3)
<br/>

