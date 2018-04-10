import { createStore } from 'redux';


// 根据老的state 和 action 生成新的state
function counter(state=0, action) {
	switch(action.type) {
		case '加机关枪':
			return state + 1;
		case '减机关枪':
      return state - 1;
    default:
      return 10;
  }
}
// 新建 store
const store = createStore(counter);

// 返回状态
const init = store.getState();
console.log(init);


function listener() {
  const current = store.getState();
  console.log(`现在有机枪${current}把`)
}
// 订阅函数
store.subscribe(listener);

// 派发事件 传递 action
store.dispatch({type:'加机关枪'});
//console.log(store.getState());
store.dispatch({type:'加机关枪'});
//console.log(store.getState());
store.dispatch({type:'减机关枪'});
//console.log(store.getState());