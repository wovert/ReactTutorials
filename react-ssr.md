# React SSR

[Text2MindMaps](https://tobloef.com/text2mindmap/)

## React 服务器端渲染

- 构建编译与运行环境
  - 安装 babel-node: `npm i babel-cli -g`
  - 安装编译 react 需要的组件
    - `npm i @babel/preset-env -S`
    - `npm i @babel/preset-preact -S`
    - `npm i babel-plugin-transform-decorators-legacy -S`
- 在 `package.json` 设置运行命令
  - `cross-env NODE_ENV=development nodemon --exec babel-node src/server/server.js`
  - `cross-env`: 跨平台设置环境变量
  - `nodemon`: 监视文件的改变并重新运行命令

- renderToString: 将 React Component 转换为HTML字符串，生成的HTML的DOM会带有额外属性：各个DOM会有`data-react-id`属性，第一个会有`data-checksum`属性(传入数数据是否改变，数据改变时，data-checksum属性就会变，checksum变化意味着组件重新渲染，不能使用上一个渲染完的内容，提高React渲染组件性能，判断哪些组件有变化)
- renderToStaticMarkup: 将 React Component 转化为HTML字符串，但是生成HTML的DOM不会有额外的属性，从而节省HTML字符串的大小

- React 16 丢弃了 `data-react-id`和`data-checksum`
- React 15 中，当重新渲染节点时，ReactDOM.render()方法执行与服务端生成的字符挨个比对。如果一旦有不匹配的，不论什么原因，React在开发模式下会发出警告，替换整个服务端的节点数。
- React 16 的客户端渲染器检测到节点不匹配，仅仅是尝试修改不匹配的HTML子树，而不是修改整个HTML树

### React 同构

- 客户端与服务器端使用同样的组件。服务器端负责首次渲染。而行为和交互由客户端进行

## 创建项目

```sh
# mkdir react-ssr && cd react-ssr
# npm init -y
# yarn add webpack webpack-cli webpack-dev-server -D
# yarn add babel-loader @babel/core @babel/preset-env @babel/preset-react -D
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

### 在Windows OS 全局安装 webpack-dev-server

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
