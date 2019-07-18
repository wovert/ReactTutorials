# Course Project

## setup

```sh
# 安装客户端项目及依赖模块
create-react-app course

cd course && yarn eject

yarn add less less-loader stylus stylus-loader -D

yarn add prop-types react-redux react-router-dom redux redux-logger redux-promise redux-thunk -S

yarn add antd moment react-swipe swipe-js-iso react-transition-group -S

yarn add qs axios blueimp-md5 -S

# 启动接口服务
cd server
yarn server
```

## 关于样式

- webpack 会把所有版块的 CSS 合并在一起，如果编写样式的时候命名以及一些处理不够规范，很容易导致样式之间冲突

- 解决方法：

  - 使用 less/sass 预编译语言，每一个版块最外层的样式类名保证唯一性（命名规则：版块名称+Box 等修饰词），把当前版块的子内容都嵌套到这个里面。公用样式写在 common 文件即可
  - stylus

  js/webpack 插件自动进行版块区分，目的是为了保证 CSS 不冲突

---

项目中的组件和 redux 没有关系的不要使用 connect 高阶处理（对于不需要使用路由中属性的一些组件，也没必要 withRouter）。因为高阶组件都是利用柯理化函数思想，形成闭包嵌套导致很多栈内存无法释放，影响性能

## 项目中数据绑定方案

1. 第一次加载组件之前或者之后(willMount/DidMount)，发送接口请求，等待数据请求成功后，把请求回来的数据更新组件内部的状态信息（第一次加载的空数据，第二次更新的时候加载真实的数据）从而重新渲染组件，展示真实的内容。

弊端：在路由切换的时候，当前组件很有可能需要重新加载（组件完成了从页面移除到再次展示的过程，这样需要从 constructor 从头加载组件）。这样导致，只要路由切换到这个组件，都需要重新发送接口请求，对于实时性数据要求不高的更新数据的组件会增加 HTTP 请求的次数，增重服务器的处理压力。

2. 每一次加载组件，首先验证 redux 是否存储了展示的信息，如果有，直接从 redux 获取即可。否则，发送一个 dispatch 派发任务，在派发的 action creator 中基于 ajax 获取数据，把获取的数据传递给 reducer，把信息存储到 reducer 中，redux 中的信息更改，那么用到它的组件也会重新渲染

弊端：某些特定的案例中会存在一些问题。需要额外处理，例如（个人中心，A 用户登录成功，进入个人信息页面，首先会把 A 的信息存储到 redux 中，这样只要进入到信息页，展示的都是 A 的信息，不会重新从服务器获取最新的信息，即时 A 的信息已经改变，或者是登录的用户已经变为 B 了，都不会改变）。这种情况，需要在一些其他操作的时候，例如：重新登录、修改用户信息、退出登录等操作），都才需要 redux 中存储的个人信息更新才可以！

3. redux-promise 中间件使用的时，action-creator 返回的 action 对象，传递给 reducer 的 action 数据（从服务器获取的数据，开发返回的是一个 promise）中的属性名必须要是 payload（严格区分大小写），只有这样，当 promise 成功，中间件才会帮我们重新发送一次派发给 reducer，然后把获取的数据信息更新 redux 容器中的状态！**promise 值必须放到 payload 属性名才可以**

```js
queryBanner() {
  return async dispatch => {
    let bannerData = await queryBanner();
    dispatch({
      type: TYPES.COURSE_QUERY_BANNER,
      bannerData
    });
  };
}
```

## 购物车流程

【点击加入购物车】

1. 向服务器发送请求，让服务器存储当前新加的信息（为了防止页面刷新，购物车信息消失：redux 中的信息在页面刷新后就没有了；可以跨平台（前提是用户已经登录））

2. 当服务器返回存储成功后，把信息往 redux 中存储一份（建议最好是：从服务器获取我的购物车信息，存储到 redux 中）

存储到 redux 中，目的是以后切换到我的购物车页面，没必要总是从服务器获取，从 redux 获取也可以，提高性能。

之所以是从服务器获取信息存储到 redux 中，因为服务器的信息时最准确的，即时页面刷新了，即时某些操作我们忘记向 redux 中存储了，每一次派发都可以获取最新的信息（只要你向服务器发行了即可）
