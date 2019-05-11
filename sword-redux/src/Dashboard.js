import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import App from './App';
import Yiying from './Yiying';
import Qibinglian from './Qibinglian';
import { logout } from './Auth.redux';

@connect (
  state => state.auth,
  {logout}
)
export default class Dashboard extends React.Component {
  render() {
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const matchUrl = this.props.match.url;
    const app = (
       <div>
        <h1>独立团</h1>
        {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
        <ul>
          <li><Link to={`${matchUrl}`}>团部</Link></li>
          <li><Link to={`${matchUrl}/yiying`}>一营</Link></li>
          <li><Link to={`${matchUrl}/qibinglian`}>骑兵连</Link></li>
        </ul>
        <Switch>
          <Route path={`${matchUrl}`} exact component={App}></Route>
          <Route path={`${matchUrl}/yiying`} component={Yiying}></Route>
          <Route path={`${matchUrl}/qibinglian`} component={Qibinglian}></Route>
        </Switch>
      </div>
    );
    return (
      this.props.isAuth ?
        app: redirectToLogin
    ) 
  }
}
