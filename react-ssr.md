# React SSR

[Text2MindMaps](https://tobloef.com/text2mindmap/)

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
