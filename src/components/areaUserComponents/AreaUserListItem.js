import React, { Component } from 'react'
import AreaUserItem from './AreaUserItem';

export default class AreaUserListItem extends Component {
  render() {
    return (
      <li>
        <AreaUserItem item={this.props.item} />
        <hr />
      </li>
    )
  }
}
