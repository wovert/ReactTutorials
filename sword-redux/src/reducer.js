// 合并所有 reducer 并且 返回
import { combineReducers } from 'redux';
import counter from './index.redux';
import auth from './Auth.redux';

const reducer = combineReducers({
  counter, 
  auth
});

export default reducer;
