import React, { Component } from 'react'

export default class UserItem extends Component {
  render() {
    return (
      <div>
        {this.props.item.firstName},  {this.props.item.lastName}, {this.props.item.email}
      </div>
    )
  }
}
