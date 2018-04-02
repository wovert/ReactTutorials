import React from 'react'

/**
 * 定义 App 组件
 */
class App extends React.Component {
  /**
   * 渲染组件
   */
  render() {
    let boss = '李云龙'
    // JSX 语法
    return (
      <div>
        <h1>独立团，团长{boss}</h1>
        <Yiying></Yiying>
      </div>
      //  Adjacent JSX elements must be wrapped in an enclosing tag
      //<h3></h3>
    )
  }
}

class Yiying extends React.Component {
  render() {
    const boss = '张大彪'
    return (
      <h1> 一营营长，{boss}</h1>
    )
  }
}

// 导出 App 组件
export default App