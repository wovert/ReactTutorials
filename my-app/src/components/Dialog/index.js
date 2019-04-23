import React from 'react' // 每一个组建中都要导入react, 因为需要基于它的create-element把JSX进行解析渲染

/** 
 * 函数式声明组件
 * @props 调用组件传递的属性集合对象
 */
export default function Dialog(props) {
  let {type, content, title, children} = props
  return (
    <section className="panel panel-default col-lg-4" style={{width:'50%'}}>
    <div className="panel-heading">
      <h3 className="panel-title">系统提示</h3>
    </div>
    <div className="panel-body">

    </div>
    {
      children ? <div className="panel-footer">
        {React.Children.map(children, item => item)}
      
      </div> : null
    }
  </section>
  ) 
}