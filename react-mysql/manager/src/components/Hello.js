import React, {Component} from 'react'

export default function (str){
  class Hello extends Component{
    render() {
      return (
        <div>
          {str}
        </div>
      )
    }
  }

  return Hello
}
