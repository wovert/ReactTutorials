import React from "react";
import PropTypes from "prop-types";

export default class VoteFoot extends React.Component {
  static propTypes = {
    supportHandler: PropTypes.func,
    againstHandler: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="panel-footer">
        <button className="btn btn-success" onClick={this.props.supportHandler}>
          支持
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger" onClick={this.props.againstHandler}>
          反对
        </button>
      </footer>
    );
  }
}
