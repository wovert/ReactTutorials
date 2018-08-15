# React

## 技术

- create-react-app
- 组件化
- JSX
- 开发调试工具
- 虚拟DOM
- 声明周期
- React-transition-group
- Redux
- Antd
- UI,容器组建
- 无状态组件
- redux-thunk
- redux-sage
- Styled-component
- Immutable.js
- reux-immutable
- axio

## 学习前提

- ES6
- webpack
- npm

## 学习收获

- 完整了解 React 工具全家桶
- 上手大型项目的前段开发
- 规范的代码编写
- 20K

## React 简介

> 2013年，Facebook开发的语言

- React JS
- React Native
- React VR

[官网](https://reactjs.org/docs)

React Fiber = React 16

## React VS Vue

- React 更加灵活，因为复杂业务时更多一点的选择
- Vue提供丰富的API，实现功能多。灵活度欠缺

## React JS 开发环境搭建

### 引入.js 文件夹来使用React

### 通过脚手架工具来编码

> 前段开发辅助工具，自动构建大型项目的开发流程目录，它允许我们一定的方式实现JS文件的相互引用，让我们更方便的对项目管理。但是，在脚手架写的代码并不能直接运行，你需要脚手架工具帮我们编译，编译出来的代码才可以浏览器识别运行。

- 脚手架工具
  - grunt
  - gulp
  - webpack

- create-react-app 脚手架工具
  - 官方推荐工具
  - 可定制性很强
  - 调试方便
  
### 安装开发环境包

1. 安装 Node

2. 安装 create-react-ap

``` node
$ npm install -g create-react-app

创建项目
$ create-react-app todolist
$ cd todolist

Mac机启动项目
$ yarn start


```

### 工程目录

```node
$ cd todolist
$ npm run start
```

- yarn.lock 项目依赖安装包版本号
- README.md 项目说明文档
- package.json 项目介绍文件，项目第三方包，可设置指令调用命令
  - npm run start => "scripts":{"start":"react-scripts start"}
- .gitignore 忽略版本管理文件
- node_modules 依赖包文件
- public
  - facicon.ico
  - index.html 项目首页模板
  - manifest.json PWA配置文件
- src 项目源代码
  - App.js
  - App.test.js 自动化测试
  - index.js 项目源代码入口文件，整个程序运行的入口文件

``` NODE
// 引入包
import React from 'react';
import ReactDOM from 'react-dom';

// all in js (JS引入css文件)
import './index.css';

// 引入自定义组件
import App from './App';

// PWA progressive web application
// https协议的服务器上，第一次访问之后，第二次访问时断网，依赖可以访问之前访问的页面
import registerServiceWorker from './registerServiceWorker';

// App组件挂载到id为root节点上
// <App /> 是JSX语法需要引入react
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

``` Node
import React from 'react';
const Component = React.Component;

import React,{Component} from 'react';
```

使用了**JSX语法**必须引入**react包**

## 基础语法

### JSX

> JavaSript XML 语法标记

相比JS输出html标记需要字符串并连接符进行输出

JSX 可以自定义标签

JSX 定义组件名必须以大写字母开头，小写字母开头是HTML标记

JSX 语法规定最外层标签必须有且只有一个标记。也可以Fragment标记作为片段标记

### 响应式设计思想和事件绑定

绑定事件命名必须驼峰是命名

### immutable

> state 不许允做任何的改变，所以拷贝数据然后再赋值

### 拆分组件与组件之间的传值

- 父组件通过组件属性向子组件传递值，子组件通过`this.props.属性名`
- 子组件向父组件传递值
- key放在循环层的最外层

- 声明式开发
- 可以与其他框架共存
- 组件化
- 单项数据流
  - 父组件传递状态数据给子组件，子组件只能只读，不能写入。但是，可以在子组件中通过调用父组件方法修改父组件的状态数据
- 视图层框架(ReactJS)
- 函数式编程
- 数据框架层(Redux/Flusk)

### Reactdevelopertools 安装及使用

### PropTypes VS DefaultProps

校验父组件传递的属性值

### props，state与render函数的关系

React是数据驱动

当props和stats值改变的时候执行render函数

render函数重新获取新的值进行渲染

数据发生变化，页面就会发生变化

### 子组件重新渲染方式

> 当state或props值改变时，它的render函数会重新运行执行

1. 父组件传给子组件传递父组件state数据改变时，子组件render函数会运行
2. 当父组件的render 函数被运行时，它的子组件的render 函数都被重新运行一次

### React 虚拟 DOM

1. state 数据
2. JSX 模板(render函数)
3. 数据 + 模板 结合，生成真实的 DOM 来显示
4. state 发生改变
5. 数据 + 模板 结合，生成真实的 DOM，替换原始的 DOM

- 缺陷：
  - 第一次生成了一个完整的DOM片段
  - 第二次生成了一个完整的DOM片段
  - 第二次的DOM替换第一次的DOM，非常耗性能

1. state 数据
2. JSX 模板
3. 数据 + 模板 结合，生成真实的 DOM 来显示
4. state 发生改变
5. 数据 + 模板 结合，生成真实的 DOM，并不直接替换原始的 DOM
6. 新的 DOM(DocumentFragment) 和原始的 DOM 做比对，找差异
7. 找出 input 框发生了变化
8. 只用新的 DOM 中的 input 元素，替换掉老的 DOM 中的 input 元素

缺陷：
系能的提升并不明显

1. state 数据
2. JSX 模板
3. 数据 + 模板 结合生成虚拟DOM (虚拟DOM就是一个 JS 对象，用它来描述真实 DOM)（损耗了性能）
  `['div', {id:'abc'}, ['span',{}, 'hello world']]`
4. 用虚拟DOM的结构生成真实的 DOM 来显示
  `<div><span id='abc'>hello world</span></div>`
5. state 发生变化

6. 数据 + 模板 生成新的虚拟DOM (极大提升了性能)
  `['div', {id:'abc'}, ['span',{}, 'bye bye']]`

7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中的内容

8. 直接操作DOM，改变 span 中的内容

**JSX -> createElement -> 虚拟DOM(JS 对象) -> 真实的 DOM**

`<div><span>item</span></div>` = `return React.createElement('div', {}, React.createElement('div', {}, 'item'));`

`return React.createElement('div', {}, React.createElement('div', {}, 'item'));` 底层创建虚拟DOM

### 虚拟优点

1. 性能提升了
2. 跨端应用得以实现 - React Native。虚拟DOM生成原生组件

### 虚拟 DOM 的 diff 算法

![diff算法](./images/diff-01.png)

setState 异步函数，连续三次setState，合并成一次setState

同级比较

![diff算法比较](./images/diff-02.png)

第一级别比较不同，不再继续比较。第一级别重新生成新的DOM节点树，替换原始节点树。缺点：其他级别相同DOM比较也会创建新的DOM，但是比比较每个节点的算法性能更好。

![diff算法比较](./images/diff-03.png)

每个节点起个名字，这样比对时性能提升。如果一致可以进行复用。

index作为key不好的原因是，删除其中某个节点之后index会重新排序，这样原始节点的key与新节点没有对应关系，所以diff算法比较性能更差。一定不要使用index作为key。

使用稳定值得作为key值才是正确的。

## 声明周期函数

> 在某一时刻组件会自动调用执行函数

![life cycle](./images/life-cycle.png)

- initalization 初始化触发
  - setup props state

- Mounting 组件挂载时触发
  - componentWillMount 组件即将被挂载到页面的之前仅自动执行一次(挂载之前)
  - render 渲染组件
  - componentDidMount 组件被挂载到页面之后仅自动被执行一次(已经挂载)

- Updation 组件更被时触发
  - props (props发生变化)
    - componentWillReceiveProps
      - 一个组件要从父组件接受参数
      - 如果这个组件第一次存在于父组件中，不会执行
      - 如果这个组件之前已经存在于父组件中，才会执行

    - shouldComponentUpdate 组件被更新之前，它会自动被执行。必须返回boolean是否继续往下执行其他事件。
      - return false; 组件不会被更新
      - return true; 组件会被更新

    - componentWillUpdate 组件被更新之前，自动执行
      - shouldComponentUpdate返回false,componentWillUpdate不会被执行
      - shouldComponentUpdate返回true,componentWillUpdate会被执行
    - render 更新渲染组件
    - componentDidUpdate 组件被更新之后，自动执行
  
  - states (states发生变化)
    - shouldComponentUpdate (true向下)
    - componentWillUpdate
    - render
    - componentDidUpdate

- Unmounting
  - componentWillUnmount 当这个组件即将被页面中剔除的时候，会被执行

``` js
第二次开始接收参数并更新子组件
shouldComponentUpdate TodoList.js:29
componentWillUpdate TodoList.js:33
render TodoList.js:40
child [componentWillReceiveProps] TodoItem.js:12
child shouldComponentUpdate TodoItem.js:21
child componentWillUpdate TodoItem.js:25
child componentDidUpdate TodoItem.js:28
componentDidUpdate
```

``` js
删除子组件
shouldComponentUpdate TodoList.js:29
componentWillUpdate TodoList.js:33
render TodoList.js:42
child [componentWillUnmount] TodoItem.js:31
componentDidUpdate
```

注意：render函数必须存在

### axios 模块

调用接口放在`componentDidMount`生命周期函数

安装第三方模块：`npm isntall axios`

重新启动服务器: `npm run start`

``` js
import axios from 'axios';
componentDidMount() {
  // 调用接口
  axios.get('/api/todolist')
    .then((data)=>{ alert('success');console.log(data); })
    .catch(()=>{ alert('faire')  });  
}
```

### [Charles](https://www.charlesproxy.com) 实现本地数据 mock

1. Charles 下载并安装
2. 新建模拟数据文件: data.json
3. Charles 软件：Tools -> Map Local Settings -> Add


## 动画

## Redux

## Reux 进阶

## 实战项目

- 环境搭建
- Header
- 首页
- 详情页
- 登录校验
- 上线流程
