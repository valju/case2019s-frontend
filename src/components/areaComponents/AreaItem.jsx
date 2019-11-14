import React, { Component } from 'react'

export default class AreaItem extends Component {
  render() {
    return (
      <div>
        {this.props.item.name}, {this.props.item.id},{this.props.item.description}, {this.props.isCommonArea}
      </div>
    )
  }
}
