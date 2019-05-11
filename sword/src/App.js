import React from 'react'
import { Button, List } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

/**
 * 定义 App 组件
 */
class App extends React.Component {
  constructor (props) {
    super(props)

    // 当前组件状态
    this.state = {
      message: '团部发出的命令'
    }
  }
  newCommand() {
    // 修改当前组件状态
    this.setState({
      'message': '团部新的命令'
    })
  }
  /**
   * 渲染组件
   */
  render () {
    let boss = '李云龙'
    // JSX 语法
    return (
      <div>
        <h1>独立团，团长{boss}</h1>
        <Button type="primary" onClick={() => this.newCommand() }>团部命令</Button>
        <Yiying boss='张大彪' msg={this.state.message}></Yiying>
        <Qibinglian boss="孙德胜" ></Qibinglian>
      </div>
      //  Adjacent JSX elements must be wrapped in an enclosing tag
      //<h3></h3>
    )
  }
}

function Qibinglian (props) {
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
    console.log('组件初始化：constructor')
  }
  componentWillMount() {
    console.log('组件将要挂载：componentWillMount')
  }
  componentDidMount() {
    console.log('组件已经挂载：componentDidMount')
  }
  componentWillReceiveProps(){
    console.log('组件要接受父组件的值：componentWillReceiveProps');
  }
  shouldComponentUpdate(){
    console.log('判断组件是不是要更新：shouldComponentUpdate');
    return true
  }
  componentWillUpdate(){
    console.log('马上要更新组件：componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('组件更新完毕：componentDidUpdate');
  }
  omponentWillUnmount(){
    console.log('组件卸载了：componentWillUnmount');
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
    console.log('组件正在加载：component is render')
    return (
      <div>
        <h1> 一营营长，{this.props.boss}</h1>
        <p>{this.props.msg}</p>
        <button onClick={this.addSolder}>新兵入伍方法1</button>
        <button onClick={() => this.addSolder() }>新兵入伍方法2</button>
        <button onClick={this.addSolderOther}>新兵入伍方法3</button>
        <List renderHeader={()=>'士兵列表'}>
          {this.state.solders.map(v => {
            return <List.Item key={v}>{v} </List.Item>
          })}
        </List>
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