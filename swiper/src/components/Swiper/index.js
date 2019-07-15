import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class Swiper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="container">
        <ul className="wrapper">
          <li>
            <img src="" alt="" />
          </li>
        </ul>
        <ul className="focus">
          <li>11</li>
        </ul>
        <a href="javascript:;" className="arrow arrowLeft">
          0
        </a>
        <a href="javascript:;" className="arrow arrowRight">
          1
        </a>
      </section>
    );
  }
}
