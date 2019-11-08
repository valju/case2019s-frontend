import React, { Component } from 'react'

export default class LocationTypeItem extends Component {
  render() {
    return (
      <div>
        {this.props.item.name}, {this.props.item.id}, {this.props.item.description}, {this.props.item.isCommonAreaType}
      </div>
    )
  }
}
