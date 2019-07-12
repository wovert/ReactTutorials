import React, { Component } from "react";
import "./index.css";
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

class Dialog extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      show: false
    };
    this.callback = null;
  }

  open(fn) {
    this.callback = fn;
    this.setState({
      show: true
    });
  }
  close() {
    this.setState({
      show: false
    });
  }

  fnClick(index) {
    this.callback && this.callback(index);
    this.close();
  }

  render() {
    return (
      <div style={{ display: this.state.show ? "block" : "none" }}>
        <div className="my-dialog-shadow" />
        <div className="panel panel-default my-dialog">
          <div className="panel-heading">
            <div className="panel-title">{this.props.title}</div>
          </div>
          <div className="panel-body">{this.props.msg}</div>
          <div className="panel-footer">
            <div className="btn-group">
              {this.props.buttons.map((button, index) => (
                <button
                  type="button"
                  className="btn btn-default btn-sm"
                  key={index}
                  onClick={this.fnClick.bind(this, index)}
                >
                  {button.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialog;
