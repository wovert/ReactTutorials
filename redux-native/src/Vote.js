import React from "react";
import PropTypes from "prop-types";
import VoteHead from "./VoteHead";
import VoteBody from "./VoteBody";
import VoteFoot from "./VoteFoot";

class Vode extends React.Component {
  // 组件传递属性是只读的，设置默认值和相关规则
  static propTypes = {
    title: PropTypes.string.isRequired,
    myRedux: PropTypes.object
  };

  constructor(props) {
    super(props);
    let { myRedux } = this.props;
    myRedux.updateState(state => {
      return {
        ...state
      };
    });
    this.state = {
      supportCount: 0,
      againstCount: 0
    };
  }

  render() {
    return (
      <section
        className="panel panel-default"
        style={{
          width: "60%",
          margin: "20px auto"
        }}
      >
        <VoteHead title={this.props.title} />
        <VoteBody myRedux={this.props.myRedux} />
        <VoteFoot myRedux={this.props.myRedux} />
      </section>
    );
  }
}

export default Vode;
