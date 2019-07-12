import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

// yarn build 直接访问非根路由返回找不到页面
// import { HashRouter as Router, Route, Link } from "react-router-dom";

// yarn build 只显示根路由(直接访问非根路由返回找不到页面)
// 应用于 react-native
// import { MemoryRouter as Router, Route, Link } from "react-router-dom";

import { connect } from "react-redux";
import View from "./pages/view";
import Add from "./pages/add";
import Data from "./data";
import { INIT_ITEM } from "./store/actions";

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      panelShow: false
    };
  }

  async componentDidMount() {
    let { data } = await Data.get("list");
    this.props.initItem(data);
  }

  render() {
    return (
      <Router>
        <div>
          <Link className="btn btn-default glyphicon glyphicon-plus" to="/add">
            添加商品
          </Link>
          <Redirect
            className="btn btn-default glyphicon glyphicon-plus"
            to="/add"
          >
            自动添加商品
          </Redirect>
          <Route path="/" exact component={View} />
          <Route path="/add" component={Add} />
        </div>
      </Router>
    );
  }
}

export default connect(
  function(state, props) {
    return state;
  },
  {
    initItem(items) {
      return {
        type: INIT_ITEM,
        items
      };
    }
  }
)(App);
