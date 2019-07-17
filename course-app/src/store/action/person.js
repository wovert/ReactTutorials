import * as TYPES from "../action-types";
import { queryInfo } from "../../api/person";

let person = {
  queryBaseInfo() {
    return {
      type: TYPES.PERSON_QUERY_BASE, // 用户基本信息行为标识
      payload: queryInfo() // 调用异步接口获取用户基本信息赋值给playload并重新派发
    };
  }
};
export default person;
