import React from "react";
import PropTypes from "prop-types";

export default class VoteFoot extends React.Component {
  // 组件传递属性是只读的，设置默认值和相关规则
  static propTypes = {
    myRedux: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { myRedux } = this.props;
    return (
      <footer className="panel-footer">
        <button
          className="btn btn-success"
          onClick={() => {
            myRedux.updateState(state => {
              let { supportCount = 0 } = state;
              return {
                supportCount: supportCount + 1
              };
            });
          }}
        >
          支持
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          className="btn btn-danger"
          onClick={() => {
            myRedux.updateState(state => {
              let { againstCount = 0 } = state;
              return {
                againstCount: againstCount + 1
              };
            });
          }}
        >
          反对
        </button>
      </footer>
    );
  }
}
