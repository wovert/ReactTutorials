/**
 * 1. 创建一个对象（默认有四个属性：type/props/ref/key），最后返回此对象
 * 2. 根据传递的值修改这个对象
 *      
 * 
 * @param {*} type 标签类型
 * @param {*} props 大部分传递props中的属性赋值给对象的props；如果是 ref 和 key，需要办传递的 props 中的这两个属性值，给创建对象的两个属性，而传递的props中把这两个值删除掉；
 * @param {*} children 作为新创建对象的props中的一个属性 
 */
function createElement (type, props, children) {
  props = props || {}
  let obj = {
    type: null,
    props: {
      children: ''
    },
    ref: null,
    key: null
  }
  obj = {...obj, type, props: {...props, children}} // 用传递的type和props覆盖原有默认值

  // 把 ref 和 key 提取出来（并且删除props中的属性）
  'key' in obj.props ? (obj.key = obj.props.key, obj.props.key = undefined) : null
  'ref' in obj.props ? (obj.ref = obj.props.ref, obj.props.ref = undefined) : null

  return obj
}

let styleObj = {color: 'red'}
let obj = createElement(
  'h1',
  {id: 'titleBox', className: 'title', style: styleObj, ref: 'AA', key: '12'}, 
  'Hello World'
)
console.log(obj)
/**
 * {
 *  type: 'h1',
 *  props: {
 *    id: 'titleBox',
 *    className: 'title',
 *    style: {color: 'red'},
 *    children: 'Hello World',
 *    ref: undefiend,
 *    key: undefined
 *  },
 *  ref: AA,
 *  key: 12,
 *  __proto__:Object.prototype
 * }
 */