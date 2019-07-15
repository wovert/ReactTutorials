import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  // 组件传递属性是只读的，设置默认值和相关规则
  static defaultProps = {};
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    // init state
    this.state = {
      supportCount: 0, // 支持人数
      againstCount: 0 // 反对人数
    };
  }

  render() {
    let { supportCount, againstCount } = this.state;
    let rate =
      supportCount + againstCount === 0
        ? 0
        : ((supportCount / (supportCount + againstCount)) * 100).toFixed(2);
    return (
      <section
        className="panel panel-default"
        style={{
          width: "60%",
          margin: "20px auto"
        }}
      >
        <header className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3>
        </header>
        <div className="panel-body">
          支持人数：{supportCount}
          <br />
          <br />
          反对人数：{againstCount}
          <br />
          <br />
          支持率：{rate}%
        </div>
        <footer className="panel-footer">
          <button className="btn btn-success" onClick={this.support}>
            支持
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn btn-danger" onClick={this.against}>
            反对
          </button>
        </footer>
      </section>
    );
  }

  // 投票支持
  support = e => this.setState({ supportCount: this.state.supportCount + 1 });

  // 投票返回
  against = e => this.setState({ againstCount: this.state.againstCount + 1 });
}

export default App;
