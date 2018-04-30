import React from 'react';
import { connect } from 'react-redux';
import { login } from './Auth.redux';
import { Redirect } from 'react-router-dom';

// 两个reducers 每个reducers 都有一个 state
// 解决：合并reducers
@connect(
  state => state.auth,
  {login}
)
export default class Auth extends React.Component {
  render() {
    return (
      <div>
        { this.props.isAuth ? <Redirect to='/dashboad' />: null }
        <h2>你没有权限，需要登录才能看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}