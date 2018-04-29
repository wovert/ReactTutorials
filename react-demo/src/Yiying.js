import React, { Component } from 'react';
class Yiying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solders: ['虎子', '柱子', '王根生']
    };
    this.addSolder = this.addSolder.bind(this);
  }
  addSolder(event) {
    console.log('add solder');
    this.setState({
      solders: [...this.state.solders, '新兵蛋子(方法1/2)'+Math.random()]
    });
  }
  addSolder2 = (event) => {
    console.log('add solder');
    this.setState({
      solders: [...this.state.solders, '新兵蛋子(方法3)'+Math.random()]
    });
  }
  render() {
    return (
      <section>
        <h2>一营营长, {this.props.boss} </h2>
        <button onClick={this.addSolder}>添加士兵方法1</button><br />
        {/* 解决this作用域问题 */}
        <button onClick={()=> { this.addSolder() }}>添加士兵方法2</button><br />
        {/* 解决this作用域问题 */}
        <button onClick={this.addSolder2}>添加士兵方法2</button><br />  
        <ul>
          {this.state.solders.map((v)=>{
            return <li key={v}>{v}</li>
          })}
        </ul>
      </section>
    );
  }
}
export default Yiying;
