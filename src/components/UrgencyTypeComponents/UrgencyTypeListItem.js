import React, { Component } from 'react'
import UrgencyTypeItem from './UrgencyTypeItem';

export default class UrgencyTypeListItem extends Component {
  render() {
    return (
      <li>
        <UrgencyTypeItem item={this.props.item} />
        <hr />
      </li>
    )
  }
}
