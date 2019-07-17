# React SSR

[Text2MindMaps](https://tobloef.com/text2mindmap/)

## 服务器端渲染 VS 客户端渲染

- 服务器端渲染需要消耗更多的服务器端资源（CPU、内存）
- 客户端渲染可以将静态资源部署到 CDN，实现高并发
- 服务端渲染对 SEO 更友好

## React 服务器端渲染

- 构建编译与运行环境
  - 安装 babel-node(运行 ES6): `npm i babel-cli -g` 或者 `npm install -g @babel/cli`
  - 安装编译 react 需要的组件
    - `npm i @babel/preset-env -S`
    - `npm i @babel/preset-preact -S`
    - `npm i babel-plugin-transform-decorators-legacy -S`
- 在 `package.json` 设置运行命令
  - `cross-env NODE_ENV=development nodemon --exec babel-node src/server/server.js`
    - `cross-env`: 跨平台设置环境变量
    - `nodemon`: 监视文件的改变并重新运行命令

### React 服务器端渲染的实现

> reat-dom/server 包里有两个方法 renderString 和 renderToStaticMarkup

- `renderToString`: 将 React Component 转换为 HTML 字符串，生成的 HTML 的 DOM 会带有额外属性：各个 DOM 会有`data-react-id`属性，第一个会有`data-checksum`属性(传入数数据是否改变，数据改变时，data-checksum 属性就会变，checksum 变化意味着组件重新渲染，不能使用上一个渲染完的内容，提高 React 渲染组件性能，判断哪些组件有变化)
- `renderToStaticMarkup`: 将 React Component 转化为 HTML 字符串，但是生成 HTML 的 DOM 不会有额外的属性，从而节省 HTML 字符串的大小

- React 16 丢弃了 `data-react-id` 和 `data-checksum`
- React 15 中，当重新渲染节点时，`ReactDOM.render()`方法执行与服务端生成的字符挨个比对。如果一旦有不匹配的，不论什么原因，React 在开发模式下会发出警告，替换整个服务端的节点数
- React 16 的客户端渲染器检测到节点不匹配，仅仅是尝试修改不匹配的 HTML 子树，而不是修改整个 HTML 树

### React 同构

![同构应用](./images/react-tg.png)

1. 第一次请求页面内容服务器端已经渲染完成
2. 之后请求都在客户端进行渲染（单页面）

- 客户端与服务器端使用同样的组件
- 服务器端负责首次渲染
- 行为和交互由客户端进行

1. 使用脚手架创建工程 `create-react-app`
2. 将 express 和 create-react-app 项目的配置文件进行结合
3. 将 create-react-app 编译打包后的文件通过 express 公开出来

`app.use('/', express.static('build'))`

## 创建项目

```sh
# mkdir react-ssr && cd react-ssr
# npm init -y
# npm i -g @babel/cli
# yarn add webpack webpack-cli webpack-dev-server -D
# yarn add babel-loader @babel/core @babel/node @babel/preset-env @babel/preset-react -D
# yarn add react react-dom
# vim .babelrc
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
  }
# yarn add html-webpack-plugin -D
# vim webpack.config.js

const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, 'src/client/index.html')
    })
  ],
  devServer: {

  }
}
```

### 在 Windows OS 全局安装 webpack-dev-server

```sh
# npm i webpack-dev-server -g
# webpack-dev-server --hot

修改源码之后，浏览器整个页面刷新
# vim src/client/App.js
 <h2>refrush</h2>
```

### 热加载

- 配置服务

```sh
# vim webpack.config.js
  devServer: {
    hot: true,
    port: 3000,
    overlay: true
  }
# webpack-dev-server
```

- 第一种配置

```sh
# yarn add react-hot-loader -D
# vim .babelrc
  "plugins": ["react-hot-loader/babel"]
# vim src/client/App.js
  import { hot } from 'react-hot-loader/root'
  ...
  export default hot(App)
# webpack-dev-server
```

### 命令配置

```sh
# vim package.json
  "scripts": {
    "build:client": "webpack",
    "dev:client": "webpack-dev-server"
  },
# yarn build:client
# yarn dev:client
```

## 服务端配置

```sh
# vim webpack.config.client.js
# vim webpack.config.server.js
  const path = require('path')

  module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/client/ServerApp.js'),
    output: {
      filename: 'ServerApp.js',
      path: path.join(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: require.resolve('babel-loader'),
          exclude: /node_modules/
        }
      ]
    }
  }
# vim package.json
  "build:client": "webpack --config webpack.config.client.js"
# yarn add express
# vim ./src/client/ServerApp.js
  import React from 'react'
  import App from './App'

  export default <App />

# vim src/server/server.js
  const express = require('express')
  cosnt app = express()
  const port = process.env.PORT || 5000

  app.listen(port, () => {
    console.log(`Server on port ${port}`)
  })
# yarn build
# yarn start

```

- Linux : `nvm ls-remote`
- Windows：`nvm ls available`
