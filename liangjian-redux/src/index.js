import { createStore } from 'redux';
// 2. 根据老的state 和 action 生成新的state
function counter(state = 0, action) {
	switch(action.type) {
		case '加机关枪':
			return state + 1;
		case '减机关枪':
			return state - 1;
    default:
			return 10;
  }
}
// 1. 新建 store
const store = createStore(counter);
function listener() {
	const current = store.getState();
	console.log(`现在有机枪${current}`);
}
// 4. 订阅 listener - 每次dispatch都会触发listener
store.subscribe(listener);

// 5. 派发事件,传递 action
store.dispatch({type: '加机关枪'});
store.dispatch({type: '加机关枪'});
store.dispatch({type: '减机关枪'});