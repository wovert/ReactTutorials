// 倒入 react 组件和 react.Componet 组件
import React, { Component } from 'react';

// 导入自定义组件
import Yiying from './Yiying';

// 定义组件，继承自 React.Component 组件
class App extends Component {
  // 渲染组件内容，即把内容渲染到视图层
  render() {
    const boss = '李云龙';
    return (
      <div>
        <h1>独立团，{boss}</h1>
        <Yiying boss="张大喵" />
      </div>
    );
  }
}
export default App;