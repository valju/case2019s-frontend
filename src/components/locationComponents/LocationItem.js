import React, { Component } from 'react'

export default class LocationItem extends Component {
  render() {
    return (
      <div>
        {this.props.item.name}, {this.props.item.id}, {this.props.item.description}, {this.props.item.surfaceArea}, {this.props.item.locationTypeId}
      </div>
    )
  }
}
