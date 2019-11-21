import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEventType } from '../../actions/eventTypes';

class EventTypeAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newEventTypeObject:
        { name: "", description: "", defaultUrgency: 0 },
    };
  }

  inputFieldValueChanged = (event) => {
    this.setState(
      {
        newEventTypeObject:
          { ...this.state.newEventTypeObject, [event.target.id]: event.target.value }
      });
  };

  addEventType = () => {
    const eventType = this.state.newEventTypeObject;
    eventType.defaultUrgency = Number(eventType.defaultUrgency);
    this.props.addEventTypeLocal(eventType);
    this.setState(
      {
        newEventTypeObject:
          { name: "", description: "", defaultUrgency: 0 },
      }
    );
  };

  render = () => {
    return (
      <div>
        <h4>New EventType</h4>
        <p>
          Name: <input id="name" type="text" onChange={this.inputFieldValueChanged} value={this.state.newEventTypeObject.name} /><br />
          Description: <input id="description" type="text" size="50" onChange={this.inputFieldValueChanged} value={this.state.newEventTypeObject.description} /><br />
          Default Urgency: <select
            id="defaultUrgency"
            onChange={this.inputFieldValueChanged}
            value={this.state.newEventTypeObject.defaultUrgency}>
            <option value="10">
              10
            </option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <br />
          <button type="button" onClick={this.addEventType}>ADD NEW EVENT TYPE</button>
        </p>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  addEventTypeLocal: (eventType) => {
    dispatch(addEventType(eventType));
  },
});

export default connect(null, mapDispatchToProps)(EventTypeAdd);
