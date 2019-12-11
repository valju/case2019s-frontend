import React, { Component } from 'react';
import EventTypeUpdate from '../../components/eventTypeComponents/EventTypeUpdate';

export default class EventTypeUpdateView extends Component {
  render() {
    return (
      <div>
        <h2>Update EventType</h2>
        <EventTypeUpdate id={this.props.match.params.id} />
      </div>
    );
  }
}
