import React, { Component } from 'react'

export default class EventTypeItem extends Component {
  render() {

    return (
      <div>
        {this.props.item.name}
        <br />
        {this.props.item.description}
        <br />
        {this.props.item.defaultUrgency}
      </div>
    )
  }
}
