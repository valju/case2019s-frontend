import React, { Component } from 'react';
import EventTypeItem from './EventTypeItem';
import { getEventType } from '../../actions/eventTypes';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BrushIcon from '@material-ui/icons/Brush';
import BuildIcon from '@material-ui/icons/Build';
import { Icon } from '@material-ui/core';

class EventTypeDetails extends Component {
  componentDidMount() {
    this.props.eventTypeGetById(this.props.id);
  }

  render() {
    return (
      <div>
        {(!this.props.eventTypes || !this.props.eventTypes.eventTypeCurrent) ? (
          <p>Waiting server response. Activity indicator could go here.</p>
        ) : (
            <div>
              <EventTypeItem item={this.props.eventTypes.eventTypeCurrent} />
              {/* <Link to={`/eventType/update/${this.props.eventTypes.eventTypeCurrent.id}`}>Update</Link> */}
              <br />
              {!this.props.eventTypes.eventTypeCurrent.isAdmin ?
                <Icon><BrushIcon /></Icon> :
                <Icon><BuildIcon /></Icon>
              }
            </div>
          )}

        <p>
          <Link to='/eventTypes'>Back</Link>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  eventTypeGetById: (id) => {
    dispatch(getEventType(id));
  }
});

const mapStateToProps = state => ({
  eventTypes: state.eventTypes,
});

export default connect(mapStateToProps, mapDispatchToProps)(EventTypeDetails);
