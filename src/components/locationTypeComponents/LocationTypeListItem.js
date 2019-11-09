import React, { Component } from 'react'
import LocationTypeItem from './LocationTypeItem';

export default class LocationTypeListItem extends Component {
  render() {
    return (
      <li>
        <LocationTypeItem item={this.props.item} />
        <hr />
      </li>
    )
  }
}
