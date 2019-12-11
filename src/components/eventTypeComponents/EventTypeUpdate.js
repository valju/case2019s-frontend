import React, { Component } from "react";
import { connect } from "react-redux";
import { updateEventType } from "../../actions/eventTypes";
import EventTypeItem from "./EventTypeItem";
import { getEventType } from "../../actions/eventTypes";
import { Link } from "react-router-dom";

class EventTypeUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedEventType: null
    };
  }

  componentDidMount() {
    if (this.props.eventTypes.eventTypeCurrent != null) {
      this.setState({
        editedEventType: this.props.eventTypes.eventTypeCurrent
      });
    }
  }

  inputFieldValueChanged = event => {
    const updatedField = event.target.id;
    let updatedValue = event.target.value;
    if (updatedField === "id" || updatedField === "name") {
      updatedValue = Number(updatedValue);
    }
    this.setState({
      editedEventType: {
        ...this.state.editedEventType,
        [updatedField]: updatedValue
      }
    });
  };

  updateEventType = () => {
    this.props.updateEventTypeLocal(this.state.editedEventType);
    if (updateEventType && this.state.editedEventType.name !== "") {
      alert("Update successful!")
    } else {
      alert("Try again.")
    }
  };

  render = () => {

    return (
      <div>
        {this.state.editedEventType === null ? (
          <p>Waiting server response. Activity indicator could go here.</p>
        ) : (
            <div>
              <h3>Old object</h3>
              <EventTypeItem item={this.state.editedEventType} />

              <div>
                <input
                  id="id"
                  type="hidden"
                  onChange={this.inputFieldValueChanged}
                  value={this.state.editedEventType.id}
                />


                <br />
                Description:{" "}
                <input
                  id="description"
                  type="text"
                  size="50"
                  onChange={this.inputFieldValueChanged}
                  value={this.state.editedEventType.description}
                />
                <br />
                Default Urgency:
                <select
                  id="defaultUrgency"
                  type="number"
                  onChange={this.inputFieldValueChanged}
                  value={this.state.editedEventType.defaultUrgency}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>


                <br />
                <br />
                <button type="button" onClick={this.updateEventType}>
                  SAVE
              </button>
                <p>
                  <Link to={`/eventtype/${this.state.editedEventType.id}`}>Back</Link>
                </p>
              </div>
            </div>
          )
        }
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  updateEventTypeLocal: eventType => {
    dispatch(updateEventType(eventType));
  }
});
const mapStateToProps = state => ({
  eventTypes: state.eventTypes
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventTypeUpdate);
