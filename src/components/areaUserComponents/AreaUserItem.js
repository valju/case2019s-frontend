import React, { Component } from 'react'
export default class AreaUserItem extends Component {
  render() {
    const { firstName, lastName, name, areaId, userId } = this.props.item
    return (
      <div>
        {areaId}, {userId}, {name}, {firstName} {lastName}
      </div>
    )
  }
}
