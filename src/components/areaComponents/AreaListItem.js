import React, { Component } from 'react';
import AreaItem from './AreaItem';

export default class AreaListItem extends Component {
  render() {
    return (
      <li>
        <AreaItem item={this.props.item} />
        <hr />
      </li>
    )
  }
}
