import React from "react";
import PropTypes from "prop-types";

export default class VoteBody extends React.Component {
  static defaultProps = {
    supportCount: 0,
    againstCount: 0
  };
  static propTypes = {
    supportCount: PropTypes.number,
    againstCount: PropTypes.number
  };
  constructor(props) {
    super(props);

    // init state
    this.state = {};
  }

  render() {
    let { supportCount, againstCount } = this.props;
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
