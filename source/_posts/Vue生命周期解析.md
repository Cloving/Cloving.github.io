---
title: Vue生命周期解析
layout: post
date: 2018-6-10 18:44:07
categories: 
- Vue
- 基础原理类
tags: 
- Vue
cover: https://cdn.jsdelivr.net/gh/Cloving/Atlas-Github/blog/CoverPicture/bg_3.jpeg
---


## 简介
**定义**：每个 `Vue` 实例在被创建之前都要经过一系列的初始化过程。例如需要设置数据监听、编译模板、挂载实例到 `DOM`、在数据变化时更新 `DOM` 等，不同的时期对应不同的周期；

**生命周期函数：**不同周期开放出来的接口；

![Vue生命周期](https://cdn.jsdelivr.net/gh/Cloving/Atlas-Github/blog/notePicture/Vue生命周期/Vue生命周期图.png)

**Vue的生命周期函数主要包括以下几个:**

1. beforeCreate 、created 
2. beforeMount 、mounted
3. beforeUpdate、  updated
4. beforeDestroy、destroyed  



## 流程解读

**第一步：**初始化事件和生命周期。此时\$data、\$el和message均处于undefined状态。（前缀 `$`，以便与用户定义的属性区分开来）。

**beforeCreate**：此时组件实例未创建，各个属性均没有生成。

**第二步：**Init、injections、 reactivity。属性均已注入绑定，而且被`$watch`变成`reactivity`。但是`$el`还是没有生成，也就是`DOM`没有生成；

**created：**\$data和message均已存在，\$el还没有。

**第三步：**判断vue实例中是否有\$el。如果有，则判断是否有template。如果没有则在手动挂载\$el之后，再判断是否有template。

**第四步：**

1、在实例内部有template属性的时候，直接用内部的，然后调用render函数去渲染。 

2、在实例内部没有找到template，就调用外部的html。实例内部的template属性比外部的优先级高。

3、要是前两者都不满足，那么就抛出错误。

**beforeMount：**只编译了模板，并没有挂载属性。即此时存在的还是虚拟DOM

**第五步：**创建vm.$el替换虚拟DOM（vm为初始化的实例对象）。

**mounted：**此时属性已挂载。\$data、\$el和message均处于已定义的状态。



### beforeUpdate和updated：

当数据改变时，这两个生命周期函数控制view层重新渲染。

**渲染步骤：**数据改变——导致虚拟DOM的改变——调用这两个生命钩子去改变视图

**1、**只有当数据与模板中的数据绑定才会这两个函数才会有效；

```javascript
var vm = new Vue({
  el: '#app',
  template: '<div id="app"></div>',  // 这里需要是<div id="app">{{a}}</div>才有效果
  beforeUpdate: function() {
    console.log('调用了beforeUpdate')
  },
  updated: function() {
    console.log('调用了uodated')
  },
  data: {
    a: 1
  }
})

vm.a = 2 // 虽然数据发生了改变，但是并未与模板绑定，所以控制台不会打印任何一条语句
```

**2、**数据改变后，在beforeUpdate和updated中分别`console.log(this.$el)`发现输出结果相同

**beforeUpdate：**数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
**updated：**由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

this.$el是一个对象，或者说是一个指针。所以更新之后显示的都是一样的。可以通过

```javascript
console.log("真实的DOM结构: "+ document.getElementById('app').innerHTML)
```

观察真实的DOM结构比对。实际中可以发现beforeUpdate中还是原来的数据，updated变成了之后的数据。



### beforeDestory和destoryed：

1、使用`app.$destroy()`进行销毁；

销毁后DOM元素仍然存在，但是再次改变data的值，beforeUpdate和updated均不起作用。即`Vue` 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁



## 生命周期函数的使用场景：

1. beforeCreate : 举个栗子：可以在这加个loading事件 
2. created ：在这结束loading，还做一些初始化，实现函数自执行 
3. mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
4. beforeDestroy： 你确认删除XX吗？ destroyed ：当前组件已被删除，清空相关内容





## 示例代码：（监测\$el、\$data、\$message变化）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>vue生命周期学习</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
</head>
<body>
  <div id="app">
    <h1>{{message}}</h1>
  </div>
</body>
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      message: 'Vue的生命周期'
    },
    // 模板将会 替换 挂载的元素
    beforeCreate: function() {
      console.group('------beforeCreate创建前状态------');
      console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
      console.log("%c%s", "color:red","message: " + this.message) 
    },
    created: function() {
      console.group('------created创建完毕状态------');
      console.log("%c%s", "color:red","el     : " + this.$el); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeMount: function() {
      console.group('------beforeMount挂载前状态------');
      console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
    },
    mounted: function() {
      console.group('------mounted 挂载结束状态------');
      console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化 
    },
    beforeUpdate: function () {
      console.group('beforeUpdate 更新前状态===============》');
      console.log("真实的DOM结构: "+ document.getElementById('app').innerHTML)
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);   
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message); 
    },
    updated: function () {
      console.group('updated 更新完成状态===============》');
      console.log("真实的DOM结构: "+ document.getElementById('app').innerHTML)
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el); 
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message); 
    },
    beforeDestroy: function () {
      console.group('beforeDestroy 销毁前状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);    
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message); 
    },
    destroyed: function () {
      console.group('destroyed 销毁完成状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);  
      console.log("%c%s", "color:red","data   : " + this.$data); 
      console.log("%c%s", "color:red","message: " + this.message)
    }
  })
</script>
</html>
```







## 参考文献

1. [详解vue生命周期 - SegmentFault思否](https://segmentfault.com/a/1190000011381906)
2. [API - Vue.js](https://cn.vuejs.org/v2/api/#template)
3. [vue生命周期详解 - 掘金](https://juejin.im/post/5afd7eb16fb9a07ac5605bb3)
4. [vue2 为什么beforeUpdate时的$el 和$data与updated时的一样](https://segmentfault.com/q/1010000011521681)





