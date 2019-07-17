import { createStore, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import reducer from "./reducer";

let store = createStore(
  reducer,
  applyMiddleware(reduxLogger, reduxThunk, reduxPromise)
  // window.devToolsExtension ? window.devToolsExtension() : f => f
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
