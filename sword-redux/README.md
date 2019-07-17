# 案例-亮剑

```sh
# npm i -g create-react-app
# create-react-app -v
# create-react-app liangjian
# cd liangjian && npm start
```

## 独立团项目

- 独立团逐渐发展，老李发现管不过来了

  - 人少的时候，无论是兵器还是人员的变更，都是`setState`
  - 发展为千人大团后，老李决定，军事生活分开
  - 所有状态归赵政委(redux)管理，自己只打仗（view 显示）

- 老赵主要功能
  - 老赵有一个保险箱(store)所有人的状态，在那里都有记录(state)
  - 需要改变的时候，需要告诉专员(dispatch)要干什么(action)
  - 处理变化的人（reducer）拿到 state 和 action ,生成新的记录（state）

## 走马上任

1. 首先通过 reducer 新建 store, 随时通过 store.getState 获取状态
2. 需要状态变更，store.dispatch(action) 来修改状态
3. Reducer 函数接受 state 和 action，返回新的 state, 可以用 store.subscribe 监听每次修改

## 安装 redux

```sh
# npm install redux -S
# vim src/index.js
```

```js
import { createStore } from "redux";
// 2. 根据老的state 和 action 生成新的state
function counter($state = 0, action) {
  switch (action.type) {
    case "加机关枪":
      return state + 1;
    case "减机关枪":
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
store.dispatch({ type: "加机关枪" });
store.dispatch({ type: "加机关枪" });
store.dispatch({ type: "减机关枪" });
```

![redux-demo](./images/redux-demo.png)

![redux-demo-result](./images/redux-demo-result.png)

## Redux 如何和 React 一起用

- 手动连接，老赵怎么管理独立团
  - 把 store.dispath 方法传递给组件，内部可以调用修改状态
  - Subscribe 订阅 render 函数，每次修改都重新渲染
  - Redux 相关内容，移到单独的文件 index.redux.js 单独管理

![redux.index.js](./images/redux-index.png)

![index.js](./images/app-index.png)

![app.js](./images/app-app.png)

## 处理异步、调试工具、更优雅的和 React 结合

- Redux 处理异步，需要 `redux-thunk` 插件
- 安装调试工具 `npm install redux-devtools-extension` 并且开启
- 使用 `react-redux` 优雅的链接 react 和 redux

## redux-thunk 插件处理异步

```sh
# npm i redux-thunk -S
# npm i redux-logger -S

使用 applyMiddleware 开启thunk中间件
Action 可以返回函数，使用 dispatch 提交 action

# npm i redux-devtools-extension -S
# npm i redux-chunk -S
```

index.js (applyMiddleware 处理中间件)

```js
import { createStore, applyMiddleware } from "redux";
const store = createStore(counter, applyMiddleware);
```

![redux-thunk-index](./images/thunk-index.png)

![redux-thunk-redux](./images/thunk-index-redux.png)

![redux-thunk-app](./images/thunk-index-app.png)

![redux-thunk-result](./images/thunk-result.png)

## 调试工具 redux-devtools-extension 配置

- 新建 `store` 的时候判断 `window.devToolsExtension`
- 使用 `compose` 结合 `thunk` 和 `window.devToolsExtension`
- 调试窗的 `redux` 选项卡，实时看到 `state`

```js
import { createStore, applyMiddleware, compose } from 'redux';
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension():f=>f;
))
```

## 使用 react-redux

- 老赵能力用起来很麻烦，为了方便管理，使用魏和尚来负责链接
- `npm i react-redux -S`
- 忘记 subscribe，记住 reducer，action 和 dispatch 即可
- React-redux 提供 Provider 和 connect 两个接口来链接

- react-redux 具体使用
  - Provider 组件在应用最外层，传入 store 即可，只用一次
  - Connect 负责从外部获取组件需要的参数
  - Connect 可以用装饰器的方式来写
    - 使用装饰器优化 connect 代码 `npm run eject` 弹出个性化配置

1. 安装 `npm i babel-plugin-transform-decorators-legacy` 插件

2. Package.json 里 babel 加上 plugins 配置

```js
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

```js
const mapStateProps = state => {
  return { num: state };
};
const actionCreator = { addGun, removeGun, addGunAsync };
// app 组件接受外部参数
App = connect(
  mapStateProps,
  actionCreator
)(App);
```

修改为

```js
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

- React 官方推荐路由库，4 是最新版本
  - Redux-router4 是最新的版本，和之前版本不兼容，浏览器和 RN 均兼容
  - React 开发单页应用必备，碱性路由即组件的该概念
  - 核心概念：
    - 动态路由
    - BrowserRouter: 浏览器路由
    - Route: 路由匹配组件渲染
    - Link: 指定页面跳转地址 to="地址"
    - Switch: 只渲染第一个 Route
    - Redirect: 页面跳转到指定位置

### 安装 [react-router](https://reacttraining.com/react-router/)

- `npm i react-router-dom -S`
- **Router4** 使用 `react-router-dom` 作为浏览器的路由
- 忘记 **Router2** 的内容，拥抱最新的 Router4

### 组件

- `BrowserRouter` 包括整个应用
- `Route`r 路由对应渲染的组件，可嵌套
- `Link` 跳转专用

```js
// 多页应用
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import App from "./App";
import Yiying from "./Yiying";
import Qibinglian from "./Qibinglian";
import Test from "./Test";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">团部</Link>
          </li>
          <li>
            <Link to="/yiying">一营</Link>
          </li>
          <li>
            <Link to="/qibinglian">骑兵连</Link>
          </li>
        </ul>
        <Switch>
          {/*Switch: 只渲染第一个Route*/}
          <Route path="/" exact component={App} />
          <Route path="/yiying" component={Yiying} boss="张大喵" />
          <Route path="/qibinglian" component={Qibinglian} boss="孙德胜" />
          <Route path="/:location" component={Test} />
          {/*不管访问什么页面都会跳转到首页*/}
          {/* <Redirect to='/'></Redirect> */}
        </Switch>
      </nav>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
```

- 跳转到 /

```js
this.props.history.push("/");
```
