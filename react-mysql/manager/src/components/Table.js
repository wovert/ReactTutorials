import React, { Component } from 'react'
import { connect } from 'react-redux'

class Table extends Component{

  fnDel(ID) {
    this.props.del_callback && this.props.del_callback(ID)
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>名称</th>
            <th>价格</th>
            <th>库存</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map((item, index)=>(
            <tr key={item.ID}>
              <td>{item.name}</td>
              <td>￥{item.price}</td>
              <td>{item.count}</td>
              <td>
                <i className="glyphicon glyphicon-trash" onClick={this.fnDel.bind(this, item.ID)}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default connect(function (state, props){
  // console.log(state)
  return state
}, {

})(Table)
