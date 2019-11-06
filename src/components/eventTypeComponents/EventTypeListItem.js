import React, { Component } from 'react'
import EventTypeItem from './EventTypeItem';

export default class EventTypeListItem extends Component {
  render() {
    return (
      <li>
        <EventTypeItem item={this.props.item} />
        <hr />
      </li>
    )
  }
}
