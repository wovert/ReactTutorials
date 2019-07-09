import React, { Component } from 'react'
import './App.css'
import Cmp1 from './Components/Cmp1'
import News from './Components/News'
import TotalNews from './Components/TotalNews'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
// import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Link to="/">首页</Link> | 
          <Link to="/news/1">新闻-参数1</Link> | 
          <Link to="/news/2">新闻-参数2</Link> | 
          <Link to="/news">总新闻</Link>
          <Switch>
            <Route path="/" exact component={Cmp1} />
            <Route path="/news/:id" exact component={News} />
            <Route path="/news" exact component={TotalNews} />
          </Switch>
        </div>
      </Router>
    )
  }
}