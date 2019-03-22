# React

## Introduction React

### What React

> 一个用于创建**可复用，可聚合** web 组件 UI 库
> 只提供前端 MVC 框架中的 V 层，并不是完整的 MVC 框架

- Facebook 出品，专注 View 层
- 一切皆组件
- 全部使用 ES6 语法
- 最新版本: React 16

### React History

- 2013-6, Facebook 官方发布 React
- 2014-9, React 热度开始上涨
- 2015-3，React Native 发布

### Why use React

Facebook 解决的问题：构建数据不断变化的大型应用

**数据**变换

大量 **DOM** 操作

**逻辑**极其复杂

- React
  - 自动 DOM 操作
  - 状态对应内容（状态<=>数据）

### React 相关资源

- [awesome-react](https://github.com/enaqx/awesome-react)
- [babeljs](https://babeljs.io/)
- [兼容性](http://kangax.github.io/compat-table/es5/)
- [不同版本 JS CDN](https://cdnjs.com/libraries/react/)
- [NPMJS](https://www.npmjs.com/)

## 前段框架对比

### MVC

> Model View Controller

- Model(模型)：数据保存
- View(视图)：用户界面
- Controller(控制器)：业务逻辑

![MVC 通信方式](./images/mvc.png)

1. View 传送指令到 Controller
2. Controller 完成业务逻辑后，要求 Model 改变状态
3. Model 将新的数据发送到 View, 用户得到反馈
- 注意以上通信都是**单向的**

#### 互动模式

1. View 接受指令，传递给 Controller

![MVC 通信方式](./images/mvc-type.png)

2. Controller 接受指令，传递给 Model保存，并在 View 层展现

![MVC 通信方式](./images/mvc-type2.png)

- Backbne.js 实例

![Backbone MVC 通信方式](./images/mvc-backbone.png) 

1. 用户可以向 View 发送指令（DOM 事件），再由 View 直接要求 Model 改变状态。

2. 用户也可以直接向 Controller 发送指令（改变 URL 触发 hashChange 事件），再由 Controller 发送给 View。

3. Controller 非常薄，只起到路由的作用，而 View 非常厚，业务逻辑都部署在 View。所以，Backbone 索性取消了 Controller，只保留一个 Router（路由器） 。

### MVP

> MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向。

![MVP 通信方式](./images/mvp.png)

1. 各部分之间的通信，都是双向的。

2. View 与 Model 不发生联系，都通过 Presenter 传递

3. View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。

### MVVM

> Model View ViewModel

![MVVM 通信方式](./images/mvvm.png) 

- MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。
- 唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。Angular 和 Ember 都采用这种模式。

## React features

### 组件化

> 提高代码**复用率、降低测试难度和代码复杂度**

- 提高代码复用率：组件将**数据和逻辑封装**，类似面向对象中的类
- 降低测试难度：组件**高内聚低耦合**，很容易对单个组件进行测试
- 降低代码复杂度：直观的语法可以解答提高可读性

### JSX

> JS 逻辑与 HTMl 标签紧密相连并且极易理解. XML 语法扩展

### 单向数据流

> 数据一旦更新，就直接重新渲染整个 app

### 虚拟 DOM 树

- React 重建 DOM 树
- 找到与上个版本的 DOM 的差异
- 计算出最新的 DOM 更新操作
- 从操作队伍中批量地执行 DOM 更新操作

- 在 Node.js服务器端运行
  - 服务器与客户端共用逻辑（lsomorphic javascript）
  - SEO 友好，便于生成缓存的单面应用
  - 直接渲染特定的页面而不用渲染整个 app

- 管理 UI 状态并不简单
  - 修改 DOM 树
  - 修改数据
  - 接收用户的输入
  - 异步 API 数据请求

## 渲染方式

- 传统方式
  - 浏览器请求页面
  - 服务器请求数据库
  - 将数据传给模板
  - 模板渲染页面
- React 的渲染方式
  - 用户输入
  - 从 API 获取数据
  - 将数据传给顶层组件
  - React 将每个组件渲染出来

## React 开发环境搭建

- Sublime
  - Preferences -> Pakcage Control -> install package
  - Ctrl + Shift + p
- 安装插件
  - emmet (html/css 编写)
  - HTML-CSS-JS Prettyfy
    - 配置 NodeJS 安装路径
    - 格式化：右键选择 -> Prettify Code
  - Spacegray 模板

## React 兼容性

- IE8+

## React 是如何使用 JSX

``` javascript
<p className="hello">Hello {this.props.name}</p>

将编译成 React 构造器的方法
React.createElement("p", {className: "hello", "hello ", this.props.name})
```

## React 入门实例

- 默认使用版本 15， 手动更新为 16
  - React 16 核心代码重写的版本，整体 API 变化不大
  - 主要变更了错误处理、生命周期、打包、对开发影响不是特别大
  - `# npm install --save react@next react-dom@next`

## React 基础语法

- import React
- class 语法新建组件，render里直接使用
- render 函数返回值就是输出 JSX 语法，会把 JSX 转换成 JS 执行

### JSX 语法代码

``` js
function hello(props){
  return <h1>Hello, {props.老大}</h1>
}
```

### JSX 转后的 JS代码

``` js
"use strict";
function hello(props) {
  return React.createElement(
    "h1",
    null,
    "hello, ",
    props.老大
  )
}
```

### JSX 基础语法

> View 层语法

- js 里直接写 html
- class 写成 className
- 变量用{}包裹即可

![组件渲染](./images/react-component.png)

![组件渲染效果](./images/react-component-inbroswer.png)

### 组件之间传递数据

> 组件之间用 props 传递数据

- 使用 `<Component data="values">` 的形式传递
- 组件里使用 `this.props` 获取值
- 如果组件只有 render函数，还可以用函数的形式写组件

![自定义组件间出传递数据](./images/sub-component.png)

![子组件接受传递的数据](./images/import-sub-component.png)

![子组件接受传递的数据渲染结果](./images/component-by-value.png)

函数也可以作为组件

![自定义函数组件](./images/import-qibinglian.png)

![自定义函数组件结果](./images/import-qibinglian-result.png)

## 组件内部 state

> 组件内部通过 state 管理状态

- JSX 本质就是 js,所以直接`数组.map` 渲染列表
- `Constructor` 设置初始状态，记得执行`super(props)`
- State 是`不可变得对象·，使用 `this.state` 获取

![组件内部](./images/state.png)
![组件内部结果](./images/state-result.png)

## 事件

- onClick 点击事件
  - JSX 里，`onClck={this.函数名}`来绑定事件
  - this 引用问题，需要在`构造函数里用 bind 绑定 this`
  - `this.setState` 修改 state, 记得`返回新的 state`，而`不是修改`

![修改组件状态](./images/event.png)

![修改组件状态结果](./images/event-result.png)

## React 生命周期

> React 组件有若干个钩子函数，在组件不同的状态执行

- 初始化周期
- 组件重新渲染生命周期
- 组件卸载声明周期

![父组件下达命令](./images/lifecycle-flow.png)

![父组件下达命令](./images/lifecycle-parent.png)
- 父组件: 输入命令并下达作战命令, `refs 属性`可以轻易获取　DOM　属性值

![子组件接受命令](./images/lifecycle-child1.png)

![子组件接受命令](./images/lifecycle-child2.png)

-------

![父组件下达命令](./images/lifecycle-yiying.png)

未下达命令之前：声明周期流程

![父组件下达命令](./images/lifecycle-yiying-result.png)

下达攻击平安县城命令之后：声明周期流程

![组件声明周期各种状态](./images/lifecycle-status.png)

## 安装 React Developer Tools

## antd-mobile 组件

`# cnpm i antd-mobile@next --save`

### 按需加载

- 安装按需加载模块 `# cnpm i babel-plugin-import --save`

``` shell
修改配置文件
# vim package.json
  "babel": {
    "presets": [
      "react-app"
    ],
   "plugins": [
     ["import", { "libraryName": "antd-mobile", "style": "css" }]
  ]
}
```

``` js
隐藏导入样式文件
import 'antd-mobile/dist/antd-mobile.css'
```

## 案例-亮剑

Windows OS use Administrator commands

``` shell
# cnpm i -g create-react-app
# create-react-app -v
# create-react-app liangjian
# cd liangjian && ls -l
# npm start
```

## Redux

> 状态管理库

### Redux 特性

- 状态管理，和 React　解耦
- 单一状态，单项数据流
- 核心概念：store, state, action, reducer

### 独立团项目

- 独立团逐渐发展，老李发现管不过来了
  - 人少的时候，无论是兵器还是人员的变更，都是 setState
  - 发展为千人大团后，老李决定，军事生活分开
  - 所有状态归赵政委(redux)管理，自己只打仗（view显示）

- 老赵主要功能
  - 老赵有一个保险箱(store)所有人的状态，在那里都有记录(state)
  - 需要改变的时候，需要告诉专员(dispatch)要干什么(action)
  - 处理变化的人（reducer）拿到 state 和 action ,生成新的记录（state）

### 走马上任

1. 首先通过 reducer 新建 store, 随时通过 store.getState 获取状态
2. 需要状态变更，store.dispatch(action) 来修改状态
3. Reducer 函数接受state和action，返回新的state, 可以用 store.subscribe 监听每次修改

### 安装 redux

``` shell
# cnpm install redux -S

# vim src/index.js

import { createStore } from 'redux';
// 2. 根据老的state 和 action 生成新的state
function counter($state = 0, action) {
  switch(action.type) {
    case '加机关枪':
      return state + 1;
     case '减机关枪':
       return state - 1;
    default:
      return 10;
  }
}

// 1. 新建 store
const store = createStore(counter);

// 3. 获取状态
const init = store.getState();
console.log(init);
function listener() {
  const current = store.getState();
  console.log(`现在有机枪${current}`);
}
// 4. 订阅 listener - 每次dispatch都会触发listener
store.subscribe(listener);

// 5. 派发事件,传递 action
store.dispatch({type: '加机关枪'});
store.dispatch({type: '加机关枪'});
store.dispatch({type: '减机关枪'});
```

![redux-demo](./images/redux-demo.png)
![redux-demo-result](./images/redux-demo-result.png)

### Redux 如何和 React 一起用

- 手动连接，老赵怎么管理独立团
  - 把 store.dispath 方法传递给组件，内部可以调用修改状态
  - Subscribe 订阅 render 函数，每次修改都重新渲染
  - Redux 相关内容，移到单独的文件 index.redux.js 单独管理

![redux.index.js](./images/redux-index.png)

![index.js](./images/app-index.png)

![app.js](./images/app-app.png)

### 处理异步、调试工具、更优雅的和 React 结合

- Redux 处理异步，需要 `redux-thunk` 插件
- 安装调试工具 `npm install redux-devtools-extension` 并且开启
- 使用 `react-redux` 优雅的链接 react 和 redux

### redux-thunk 插件处理异步

``` shell
# cnpm i redux-thunk -S
# cnpm i redux-logger -S

使用 applyMiddleware 开启thunk中间件
**Action 可以返回函数，使用 dispatch 提交 action**

# cnpm i redux-devtools-extension -S
# cnpm i redux-chunk -S
```

index.js (applyMiddleware 处理中间件)

``` js
import { createStore, applyMiddleware} from 'redux'
const store = createStore(counter, applyMiddleware)
```

![redux-thunk-index](./images/thunk-index.png)

![redux-thunk-redux](./images/thunk-index-redux.png)

![redux-thunk-app](./images/thunk-index-app.png)

![redux-thunk-result](./images/thunk-result.png)


### 调试工具 redux-devtools-extension 配置

- 新建 store 的时候判断 window.devToolsExtension
- 使用 compose 结合 thunk 和 window.devToolsExtension
- 调试窗的 redux 选项卡，实时看到 state

``` js
import { createStore, applyMiddleware, compose } from 'redux';
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension():f=>f;
))
```

### 使用 react-redux

- 老赵能力用起来很麻烦，为了方便管理，使用魏和尚来负责链接
- `cnpm i react-redux -S`
- 忘记 subscribe，记住reducer，action和dispatch 即可
- React-redux 提供 Provider 和 connect 两个接口来链接

- react-redux 具体使用
  - Provider 组件在应用最外层，传入 store 即可，只用一次
  - Connect 负责从外部获取组件需要的参数
  - Connect 可以用装饰器的方式来写
    - 使用装饰器优化 connect 代码 `npm run eject` 弹出个性化配置

1. 安装 `npm i babel-plugin-transform-decorators-legacy` 插件

2. Package.json 里babel 加上 plugins 配置

``` js
"babel": {
  "presets": [
    "react-app"
  ],
  "plugins": [
     "transform-decorators-legacy"
  ]
}
```	

3. 修改 connect

``` js
const mapStateProps = (state) => {
  return { num: state };
}
const actionCreator = { addGun, removeGun, addGunAsync };
// app 组件接受外部参数
App = connect(mapStateProps, actionCreator)(App);
```

修改为

``` js
@connect(
  // 要 state 什么属性放到 props
  state => ({ num: state }),
  // 要什么方法，放到 props里，自动dispatch
  { addGun, removeGun, addGunAsync }
)
class App extends React.Component {...}

```

![redux-thunk-result](./images/react-redux-index.png)

![redux-thunk-result](./images/react-redux-app.png)

![redux-thunk-result](./images/react-redux-app2.png)

## Redux-router4

- React 官方推荐路由库，4是最新版本
  - Redux-router4 是最新的版本，和之前版本不兼容，浏览器和 RN 均兼容
  - React 开发单页应用必备，碱性路由即组件的该概念
  - 核心概念：
    - 动态路由
    - BrowserRouter: 浏览器路由
    - Route: 路由匹配组件渲染
    - Link: 指定页面跳转地址 to="地址"
    - Switch: 只渲染第一个Route
    - Redirect: 页面跳转到指定位置

### 安装 [react-router](https://reacttraining.com/react-router/)

- `cnpm i react-router-dom -S`
- Router4 使用 react-router-dom 作为浏览器的路由
- 忘记 Router2  的内容，拥抱最新的 Router4

### 组件

- BrowserRouter 包括整个应用
- Router 路由对应渲染的组件，可嵌套
- Link 跳转专用

``` js
// 多页应用
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Yiying from './Yiying';
import Qibinglian from './Qibinglian';
import Test from './Test';
ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">团部</Link></li>
          <li><Link to="/yiying">一营</Link></li>
          <li><Link to="/qibinglian">骑兵连</Link></li>
        </ul>
        <Switch>
          {/*Switch: 只渲染第一个Route*/}
          <Route path="/" exact component={App}></Route>
          <Route path="/yiying" component={Yiying} boss="张大喵"></Route>
          <Route path="/qibinglian" component={Qibinglian} boss="孙德胜"></Route>
          <Route path="/:location" component={Test}></Route>
          {/*不管访问什么页面都会跳转到首页*/}
          {/* <Redirect to='/'></Redirect> */}
        </Switch>
      </nav>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);
```

- 跳转到 /

``` js
this.props.history.push('/');
```

### 其他组件

- url 参数，Router 组件参数可用冒号标识参数
- Redirect 组件跳转
  - <Redirect to="/"></Redirect>
- Switch 只渲染一个子 Route 组件

![redux-router-index](./images/react-router-index.png)

![redux-thunk-test](./images/react-router-test.png)

## 前后端联调

### 使用 asios 发送异步请求

- 如何发送,端口不一致,使用 proxy 配置转发
- axios 拦截器, 统一 loading  处理
- redux 里使用异步数据,渲染页面

### axios

> 简洁好用的发送请求库

- 安装: `npm install axios --save`

- 启动 mongod 服务: `mongod.exe --dbpath C:\usr_local\MongoDB\data --port 9093`

``` shell
# vim package.json
{
  "proxy": "http://localhost:9093"
}
```

Auth.js

``` js
import axios from 'axios';
class Auth extends React.Component {
  constructor() {}
  componentDidMount() {
    axios.get('/data')
      .then(res=>{
        if (res.status == 200) {
          this.setState({
            data: res.data
          });
        }
      });
  }
}
```

## jspm

> Package Manager

- 语言包：npm, github
- Traceur
- Babel
- 发布应用：bundle

- SystemJS 加载 js 模块
  - AMD
  - CommonJS
  - ES6

### setup jspm

- 全局安装：`# cnpm install jspm -g`
- 创建项目：`# mkdir frontend && cd frontend`
- 初始化项目：`# npm init`
- 安装 jspm : `# cnpm i jspm --save-dev`
- 配置 jspm : `# jspm init`
  - config.js 是jspm 配置文件
  - jspm_packages jspm安装的包目录

- jspm会 动态的载入 babel 工具

### jspm install package

- 修改报名位jquery components 是仓库拥有者， jquery 仓库的名字

`#jspm install jquery=github:components/jquery`

- config.js

### jspm uninstall package

`# jspm uninstall jquery`

- https://github.com/jspm/registry 的package.json 有jquery， 通过一下方式安装

-jspm install jquery 安装最新的版本
-jspm install jquery@^2.1.0
-jspm install jquery@~2.1.0

### 使用ES6模块, BrowserSync 使用

1. `npm install -g browser-sync` 安装 Node 后，通过npm安装BrowserSync(自动刷新)

2. 使用BrowserSync： `browser-sync start --server` 开启服务

browser-sync start --server --no-notify --files 'index.html, app/**/*.js'

### 打包bundle 功能

``` shell
# jspm bundle app/main app/build.js  将app文件夹下的main.js里面的js都打包到build.js中
# jspm bundle app/main app/build.js --inject 这样不用在html 引入build.js文件
```

### jspm 安装 react

``` shell
# jspm install react
# jspm install react@0.14.0-rc1

# jspm install react-dom
# jspm install semantic-ui
# jspm install css
```

监视服务器文件的变化

``` shell
# browser-sync start --server --no-notify --files 'index.html, app/**/*.js'
```

## bower 包管理

- `# cnpm install -g bower`
- `# bower install react`
