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
        <Yiying boss='张大彪'></Yiying>
        <Qibinglian boss="孙德胜"></Qibinglian>
      </div>
      //  Adjacent JSX elements must be wrapped in an enclosing tag
      //<h3></h3>
    )
  }
}

function Qibinglian(props) {
  return <h3>骑兵连连长{props.boss}, 冲啊!</h3>
}

class Yiying extends React.Component {
  // 初始化组件
  constructor(props) {
    super(props)
    this.state = {
      solders: ['虎子', '柱子', '王根生']
    }
    // onClick={this.addSolder} 解决 this 作用域问题
    this.addSolder = this.addSolder.bind(this)
  }
  // 事件函数
  addSolder(){
    console.log('add new solder')
    // 返回新的对象
    this.setState({
      solders: [...this.state.solders, '新兵蛋子'+Math.random()]
    })
  }

  addSolderOther = () => {
    console.log('add new solder')
    // 返回新的对象
    this.setState({
      solders: [...this.state.solders, '新兵蛋子'+Math.random()]
    })
  }

  render() {
    return (
      <div>
        <h1> 一营营长，{this.props.boss}</h1>
        <button onClick={this.addSolder}>新兵入伍方法1</button>
        <button onClick={() => this.addSolder() }>新兵入伍方法2</button>
        <button onClick={this.addSolderOther}>新兵入伍方法3</button>
        <ul>
          {this.state.solders.map(v => {
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

// 导出 App 组件
export default App