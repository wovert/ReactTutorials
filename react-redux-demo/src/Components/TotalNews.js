import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import SportsNews from './SportsNews'
import Culture from './Culture'

class TotalNews extends Component {

  render () {
    console.log(this.props.match)
    console.log(window.location)
    const path = this.props.match.path

    return (
      <div>
        <h2>总新闻</h2>
        <Router>
          <nav className="nav">
            <Link to={path + '/sports'}>体育</Link> | 
            <Link to={path + '/culture'}>文化</Link>
          </nav>
          <Switch>
            <Route path={path + '/'} component={SportsNews} />
            <Route path={path + '/sports'} component={SportsNews} />
            <Route path={path + '/culture'} component={Culture} />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default TotalNews
