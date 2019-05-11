import React from 'react';

export default class Test extends React.Component {
  render() {
    console.log(this.props);
    // 直接跳转到 /
    //this.props.history.push('/');
    return <h2>测试组件 {this.props.match.params.location}</h2>
  }
}