import * as TYPES from "../action-types";

let INIT_STATE = {
  baseInfo: null
};
export default function person(state = INIT_STATE, action) {
  state = JSON.parse(JSON.stringify(state));
  let payload = {};
  switch (action.type) {
    case TYPES.PERSON_QUERY_BASE:
      payload = action.payload;
      state.baseInfo =
        parseFloat(payload.code) === 0 ? payload.data : state.baseInfo;
      break;
    default:
      break;
  }
  return state;
}
