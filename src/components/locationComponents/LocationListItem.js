import React, { Component } from 'react'
import LocationItem from './LocationItem';

export default class LocationListItem extends Component {
  render() {
    return (
      <li>
        <LocationItem item={this.props.item} />
        <hr />
      </li>
    )
  }
}
