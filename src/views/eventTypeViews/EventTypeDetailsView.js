import React, { Component } from 'react';
import EventTypeDetails from '../../components/eventTypeComponents/EventTypeDetails';

export default class EventTypeDetailsView extends Component {

  render() {
    return (
      <div>
        <h2>EventType Details</h2>
        <EventTypeDetails id={this.props.match.params.id} />
      </div>
    );
  }
}
