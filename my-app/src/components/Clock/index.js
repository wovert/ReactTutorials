import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    // => props, contet, updater
    // 相当于 React.Component.call(this)，也就是call继承，把父类私有的属性继承过来
    /*
     * this.props: 属性集合
     * this.refs: ref集合（非受控组件中用到）
     * this.context: 上下文
     */
    super(props);
    console.log("Clock constructed");
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    console.log("Clock did unmount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("Lock will unmount");
    clearInterval(this.timerID);
  }

  componentDidUpdate() {
    console.log("Clock did update");
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
