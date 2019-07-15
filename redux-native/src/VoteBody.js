import React from "react";

export default class VoteBody extends React.Component {
  constructor(props) {
    super(props);

    // init state
    this.state = {
      refresh: 0
    };
  }

  componentDidMount() {
    const { myRedux } = this.props;
    myRedux.subscribe(() => {
      this.setState({
        refresh: this.state.refresh + 1
      });
    });
  }

  render() {
    const { myRedux } = this.props;
    const state = myRedux.getState();
    let { supportCount = 0, againstCount = 0 } = state;
    let rate =
      supportCount + againstCount === 0
        ? 0
        : ((supportCount / (supportCount + againstCount)) * 100).toFixed(2);
    return (
      <div className="panel-body">
        支持人数：{supportCount}
        <br />
        <br />
        反对人数：{againstCount}
        <br />
        <br />
        支持率：{rate}%
      </div>
    );
  }
}
