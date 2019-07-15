import React from "react";
import PropTypes from "prop-types";

export default class VoteHead extends React.Component {
  // 组件传递属性是只读的，设置默认值和相关规则
  static defaultProps = {
    title: "世界杯投票"
  };
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    // init state
    this.state = {};
  }

  render() {
    return (
      <header className="panel-heading">
        <h3 className="panel-title">{this.props.title}</h3>
      </header>
    );
  }
}
