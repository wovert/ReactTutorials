# React 是什么
> 一个用于创建**可复用，可聚合** web 组件 UI 库
> 只提供前端 MVC 框架中的 V 层，并不是完整的 MVC 框架

- Facebook 出品，专注 View 层
- 一切皆组件
- 全部使用 ES6 语法
- 最新版本: React 16

# Why use React
1. 组件化：而不是写一大堆 HTML 模板
2. JSX：JS 逻辑与 HTMl 标签紧密相连并且极易理解. XML 语法扩展
3. 单向数据流：数据一旦更新，就直接重新渲染整个 app
4. 虚拟 DOM 树
- JavaScript 快
- DOM 操作慢

- 虚拟 DOM
	+ React 重建 DOM 树
	+ 找到与上个版本的 DOM 的差异
	+ 计算出最新的 DOM 更新操作
	+ 从操作队伍中批量地执行 DOM 更新操作

- 在 Node.js服务器端运行
	+ 服务器与客户端共用逻辑（lsomorphic javascript）
	+ SEO 友好，便于生成缓存的单面应用
	+ 直接渲染特定的页面而不用渲染整个 app


- 管理 UI 状态并不简单
	+ 修改 DOM 树
	+ 修改数据
	+ 接收用户的输入
	+ 异步 API 数据请求

## 渲染方式
- 传统方式
	+ 浏览器请求页面
	+ 服务器请求数据库
	+ 将数据传给模板
	+ 模板渲染页面
- React 的渲染方式
	+ 用户输入
	+ 从 API 获取数据
	+ 将数据传给顶层组件
	+ React 将每个组件渲染出来

## React 是如何使用 JSX
`<p className="hello">
	Hello {this.props.name}
</p>`

- 将编译成 React 构造器的方法
`React.createElement("p", {className: "hello", "hello ", this.props.name})`




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

## 处理异步、调试工具、更优雅的和 React 结合
- Redux 处理异步，需要 `redux-thunk` 插件
- `npm install redux-devtools-extension` 并且开启
- 使用 react-redux 优雅的链接 react 和 redux

### redux-thunk
`cnpm i redux-thunk -S`
`cnpm i redux-logger -S`
- 使用 applyMiddleware 开启thunk中间件
- Action 可以返回函数，使用 dispatch 提交 action
import { createStore, applyMiddleware} from 'redux'
const store = createStore(counter, applyMiddleware)

`cnpm i redux-devtools-extension -S`
`cnpm i redux-chunk -S`

## 使用 react-redux
- 老赵能力用起来很麻烦，为了方便管理，使用魏和尚来负责链接
- `cnpm i react-redux -S`
- 忘记 subscribe，记住reducer，action和dispatch 即可
- React-redux 提供 Provider 和 connect 两个接口来链接

- react-redux 具体使用
	+ Provider 组件在应用最外层，传入store即可，只用一次
	+ Connect 负责从外部获取组件需要的参数
	+ Connect 可以用装饰器的方式来写

### code
import { Provider } from 'react-redux';

- 使用装饰器优化 connect 代码
`npm run ejet 弹出个性化配置`

- npm i babel-plugin-transform-decorators-legacy 插件
- Package.json 里babel 加上 plugins 配置

# Redux-router4
- React 官方推荐路由库，4是最新版本
	+ 4 是最新的版本，和之前版本不兼容，浏览器和RN均兼容
	+ React 开发单页应用必备，碱性路由即组件的该概念
	+ 核心概念：动态路由、Route、Link、Switch

## 安装 react-router
- `cnpm i react-router-dom -S`
- Router4 使用 react-router-dom 作为浏览器的路由

## 组件
- BrowerRouter 包括整个应用
- Router 路由对应渲染的组件，可嵌套
- Link 跳转专用

- 代码
// 多页应用
import { BrowerRouter, Route, Link } from 'react-router-dom';

ReactDOM.render(
  (<Provider store={store}>
    <BrowerRouter>
      <div>
        <ul>
            <li>
              <Link to="/">一营</Link>
            </li>
            <li>
              <Link to="/erying">二营</Link>
            </li>
            <li>
              <Link to="/qibinglian">骑兵连</Link>
            </li>                    
        </ul>
        <Route path="/" exact component={App}></Route>
        <Route path="/erying" component={Erying}></Route>
        <Route path="/qibinglian" component={Qibinglian}></Route>
      </div>
    </BrowerRouter>
  </Provider>),
  document.getElementById('root')
);


## 其他组件
- url 参数，Router 组件参数可用冒号标识参数
- Redirect 组件跳转
	+ <Redirect to="/"></Redirect>
- Switch 只渲染一个子 Route 组件






# jspm
> Package Manager

- 语言包
	+ npm, github

- Traceur
- Babel
- 发布应用：bundle

- SystemJS 加载 js 模块
	+ AMD
	+ CommonJS
	+ ES6

## setup
- 全局安装：`cnpm install jspm -g`
- 创建项目：`mkdir frontend && cd frontend`
- 初始化项目：`npm init`
- 安装 jspm : `cnpm i jspm --save-dev`
- 配置 jspm : `jspm init`
	+ config.js 是jspm 配置文件
	+ jspm_packages jspm安装的包目录

- jspm会 动态的载入 babel 工具

## jspm install package
- 修改报名位jquery components 是仓库拥有者， jquery 仓库的名字
`jspm install jquery=github:components/jquery`
- config.js

## jspm uninstall package
`jspm uninstall jquery`


- https://github.com/jspm/registry 的package.json 有jquery， 通过一下方式安装
jspm install jquery 安装最新的版本
jspm install jquery@^2.1.0
jspm install jquery@~2.1.0


## 使用ES6模块, BrowserSync 使用
 1. `npm install -g browser-sync` 安装 Node 后，通过npm安装BrowserSync(自动刷新)
 2. 使用BrowserSync： `browser-sync start --server` 开启服务
browser-sync start --server --no-notify --files 'index.html, app/**/*.js' 

## 打包bundle 功能
`jspm bundle app/main app/build.js`  将app文件夹下的main.js里面的js都打包到build.js中

`jspm bundle app/main app/build.js --inject` 这样不用在html 引入build.js文件


# jspm 安装 react
`jspm install react`
`jspm install react@0.14.0-rc1`

`jspm install react-dom`
`jspm install semantic-ui`
`jspm install css`

- 监视服务器文件的变化
`browser-sync start --server --no-notify --files 'index.html, app/**/*.js'`

