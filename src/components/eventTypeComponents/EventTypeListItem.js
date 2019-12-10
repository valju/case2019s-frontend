import React, { Component } from 'react'
import EventTypeItem from './EventTypeItem';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'

export default class EventTypeListItem extends Component {
  render() {
    return (
      <li>
        <EventTypeItem item={this.props.item} />
        <Link to={`/eventtype/${this.props.item.id}`}>View</Link>
        <br />

      </li>
    )
  }
}
