import React from "react";
import PropTypes from "prop-types";
import VoteHead from "./VoteHead";
import VoteBody from "./VoteBody";
import VoteFoot from "./VoteFoot";

class App extends React.Component {
  // 组件传递属性是只读的，设置默认值和相关规则
  static defaultProps = {};
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
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
        <VoteBody
          supportCount={this.state.supportCount}
          againstCount={this.state.againstCount}
        />
        <VoteFoot
          supportHandler={e => {
            this.setState({ supportCount: this.state.supportCount + 1 });
          }}
          againstHandler={e => {
            this.setState({ againstCount: this.state.againstCount + 1 });
          }}
        />
      </section>
    );
  }
}

export default App;
