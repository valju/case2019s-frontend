import React, { Component } from 'react'
import EventTypeItem from './EventTypeItem';
import { Link } from 'react-router-dom';

export default class EventTypeListItem extends Component {
  render() {
    return (
      <li>
        <EventTypeItem item={this.props.item} />
        <Link to={`/eventType/${this.props.item.id}`}>View</Link>
        {/* <Button type="button" onClick={() => this.props.delete(this.props.item.id)}>Delete</Button> */}
        <hr />
      </li>
    )
  }
}
