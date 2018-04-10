# React 是什么
> 构建 UI 库
- Facebook 出品，专注 View 层
- 一切皆组件
- 全部使用 ES6 语法
- 最新版本: React 16

# 入门实例
- 默认使用版本 15， 手动更新为 16
	+ React 16 核心代码重写的版本，整体 API 变化不大
	+ 主要变更了错误处理、生命周期、打包、对开发影响不是特别大
	+ `npm install --save react@next react-dom@next`

# React 基础语法
- import React
- class 语法新建组件，render里直接使用
- render 函数返回值就是输出 JSX 语法，会把 JSX 转换成 JS 执行

## JSX 语法代码
`function hello(props){
	return <h1>Hello, {props.老大}</h1>
}`

## JSX 转后的 JS代码
`"use strict";
function hello(props) {
	return React.createElement(
		"h1",
		null,
		"hello, ",
		props.老大
	)
}`

# JSX 基础语法
> View 层语法
- js 里直接写 html
- class 写成 className
- 变量用{}包裹即可

# 组件之间传递数据
> 组件之间用 props 传递数据

- 使用 `<Component data="values">` 的形式传递
- 组件里使用 `this.props` 获取值
- 如果组件只有 render函数，还可以用函数的形式写组件

# 组件内部 state
> 组件内部通过 state 管理状态

- JSX 本质就是 js,所以直接`数组.map` 渲染列表
- `Constructor` 设置初始状态，记得执行`super(props)`
- State 是`不可变得对象·，使用 `this.state` 获取

# 事件
- onClick 点击事件
	+ JSX 里，`onClck={this.函数名}`来绑定事件
	+ this 引用问题，需要在`构造函数里用 bind 绑定 this`
	+ `this.setState` 修改 state, 记得`返回新的 state`，而`不是修改`

# React 生命周期
> React 组件有若干个钩子函数，在组件不同的状态执行

- 初始化周期
- 组件重新渲染生命周期
- 组件卸载声明周期
											父组件render

Init render						compomentWillReceiveProps()		
constructor()					shouldComponentUpdate() <- this.setState()
componentWillMount()	componentWillUpdate() <- this.forceUpdate()
								render()
componentDidMount() 	componentDidUpdate()
								componentWillUnmount()

- 安装 `React Developer Tools`


# 案例-亮剑
- Windows OS use Administrator commands
`# cnpm i -g create-react-app`
`# create-react-app -v`
`# create-react-app liangjian`
`# cd liangjian && ls -l`
`# npm start`

## antd-mobile 组件
cnpm i antd-mobile@next --save

### 按需加载
- 安装按需加载模块
`cnpm i babel-plugin-import --save`
- 修改配置文件: package.json
"babel": {
	"presets": [
		"react-app"
	],
	"plugins": [
		["import", { "libraryName": "antd-mobile", "style": "css" }]
	]
}
- 隐藏导入样式文件
`import 'antd-mobile/dist/antd-mobile.css'`

# Redux
## Redux 是什么
> 状态管理库

## Redux 特性
- 状态管理，和React　解耦
- 单一状态，单项数据流
- 核心概念：store, state, action, reducer

## 独立团项目
- 独立团逐渐发展，老李发现管不过来了
	+ 人少的时候，无论是兵器还是人员的变更，都是 setState
	+ 发展为千人大团后，老李决定，军事生活分开
	+ 所有状态归赵政委(redux)管理，自己只打仗（view显示）


- 老赵主要功能
	+ 老赵有一个保险箱(store)所有人的状态，在那里都有记录(state)
	+ 需要改变的时候，需要告诉专员(dispatch)要干什么（action）
	+ 处理变化的人（reducer）拿到 state 和 action ,生成新的记录（state）

- 走马上任
	+ 首先通过 reducer 新建 store, 随时通过 store.getState 获取状态
	+ 需要状态变更，store.dispatch(action) 来修改状态
	+ Reducer 函数接受state和action，返回新的state, 可以用 store.subscribe 监听每次修改

## 安装 redux
`cnpm install redux -S`

- src/index.js

import { createStore } from 'redux';


// 根据老的state 和 action 生成新的state
function counter($state=0, action) {
	switch(action.type) {
		case '加机关枪':
			return state + 1;
		case '减机关枪':
			return state - 1;
    return 10;
  }
}
// 新建 store
const store = createStore(counter);
const init = store.getState();
console.log(init);

## Redux 如何和 React 一起用
- 手动连接，老赵怎么管理独立团
	+ 把 store.dispath 方法传递给组件，内部可以调用修改状态
	+ Subscribe 订阅 render 函数，每次修改都重新渲染
	+ Redux 相关内容，移到单独的文件 index.redux.js 单独管理