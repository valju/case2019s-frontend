import React, { Component } from 'react';
import AreaItem from './AreaUserItem';

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
export default AreaUserListItem;
