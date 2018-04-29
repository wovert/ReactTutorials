import React, { Component } from 'react';
class Yiying extends Component {
  constructor(props) {
    console.log('constructor:一营组件初始化');
    super(props);
    this.state = {solders: ['虎子', '柱子', '王根生']};
    this.addSolder = this.addSolder.bind(this);
  }
  addSolder(event) {
    console.log('add solder');
    this.setState({ solders: [...this.state.solders, '新兵蛋子(方法1/2)'+Math.random()] });
  }
  addSolder2 = (event) => {
    console.log('add solder');
    this.setState({ solders: [...this.state.solders, '新兵蛋子(方法3)'+Math.random()] });
  }
  componentWillMount() { console.log('componentWillMount:一营组件就要加载'); }
  render() {
    console.log('render:一营一营组件正在加载');
    return (
      <section>
        <h2>一营营长, {this.props.boss} </h2>
        <blockquote>团部命令：{this.props.message}</blockquote>
        <button onClick={this.addSolder}>添加士兵方法1</button><br />
        {/* 解决this作用域问题 */}
        <button onClick={()=> { this.addSolder() }}>添加士兵方法2</button><br />
        {/* 解决this作用域问题 */}
        <button onClick={this.addSolder2}>添加士兵方法2</button><br />  
        <ul>
          {this.state.solders.map((v)=>{
            return <li key={v}>{v} | 作战命令： {this.props.message}</li>
          })}
        </ul>
      </section>
    );
  }
  componentDidMount() {
    console.log('componentDidMount:一营组件加载完毕');
    console.log('----------------------------------------')
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps: 一营组件接受父组件的值');
  }
  shouldComponentUpdate(nextProps) {
    console.log('shouldComponentUpdate: 一营组件判断是不是要更新组件');
    return true;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate: 一营组件马上要更新组件');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate: 一营组件更新完毕');
  }  
  componentWillUnmount() {
    console.log('componentDidUnmount: 一营组件卸载了');
  }
}
export default Yiying;
