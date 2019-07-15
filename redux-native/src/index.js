import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Vote from "./Vote";

// 全局下挂载一个容器来实现信息共享和通信
let myRedux = (function anonymouse() {
  let state = {
      supportCount: 0,
      againstCount: 0
    },
    listenState = [];

  function updateState(callback) {
    // callback 回调函数中修改并且返回最新的状态信息的，用返回的状态信息替换原有的状态信息
    let newState = callback(state);
    state = { ...state, ...newState };

    // 当状态更改：通知计划表中的方法执行
    listenState.forEach(item => {
      if (typeof item === "function") {
        item();
      }
    });
  }

  // 获取最新的状态信息
  function getState() {
    return state;
  }

  function subscribe(fn) {
    for (let i = 0; i < listenState.length; i++) {
      let item = listenState[i];
      if (item === fn) {
        return;
      }
    }
    listenState.push(fn);
  }

  return {
    updateState,
    getState,
    subscribe
  };
})();

ReactDOM.render(
  <main>
    <Vote myRedux={myRedux} title="世界杯小组赛法国VS秘鲁，法国队必胜" />
    {/* <Vote title="世界杯小组赛阿根廷VS克罗地亚，老板与魔笛之争" /> */}
  </main>,
  document.getElementById("root")
);
