import React, { Component } from 'react'
import UserItem from './UserItem';

export default class UserListItem extends Component {
  render() {
    return (
      <li>
        <UserItem item={this.props.item} />
        <hr />
      </li>
    )
  }
}
