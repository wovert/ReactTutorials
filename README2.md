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




## 原理进阶

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
