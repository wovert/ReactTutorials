import * as TYPES from "../action-types";

let INIT_STATE = {
  baseInfo: null
};

export default function person(state = INIT_STATE, action) {
  state = JSON.parse(JSON.stringify(state));
  let payload = {};
  switch (action.type) {
    case TYPES.PERSON_QUERY_BASE:
      payload = action.payload; // palyload = queryInfo异步接口调用的结果
      // 每一次加载组件；验证baseInfo值，基于dispatch派发一个任务（获取服务器的数据，发送给reducer，并且修改容器中的baseInfo，组件重新渲染）；如果有信息，直接渲染组件，而不需要在重新派发任务（不再重新发送ajax请求）
      // payload.code = queryInfo().code ==== 0 数据获取成功
      state.baseInfo =
        parseFloat(payload.code) === 0 ? payload.data : state.baseInfo;
      break;
    default:
      break;
  }
  return state;
}
