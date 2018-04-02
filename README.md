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

- JSX
`function hello(props){
	return <h1>Hello, {props.老大}</h1>
}`

- JS
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
- View 层语法
	+ js 里直接写 html
	+ class 写成 className
	+ 变量用{}包裹即可


# 案例-亮剑
- Windows OS use Administrator commands
`# cnpm i -g create-react-app`
`# create-react-app -v`
`# create-react-app liangjian`
`# cd liangjian && ls -l`
`# npm start`