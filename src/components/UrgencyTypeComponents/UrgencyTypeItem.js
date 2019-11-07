import React, { Component } from 'react'

export default class UrgencyTypeItem extends Component {
  render() {
    return (
      <div>
        {this.props.item.name}, {this.props.item.id}
      </div>
    )
  }
}
