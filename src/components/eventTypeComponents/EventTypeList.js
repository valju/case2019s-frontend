import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllEventTypes } from '../../actions/eventTypes'
import EventTypeListItem from './EventTypeListItem';

class EventTypeList extends Component {
  componentDidMount() {
    this.props.eventTypeFetchAll();
  }

  render() {
    return <div>
      <h3>EventType List</h3>
      <ol>{
        this.props.eventTypes.eventTypeList.map(item =>
          <EventTypeListItem key={item.id} item={item} />)
      }</ol>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  eventTypeFetchAll: () => (
    dispatch(fetchAllEventTypes())
  )

});

const mapStateToProps = state => ({
  eventTypes: state.eventTypes
});

export default connect(mapStateToProps, mapDispatchToProps)(EventTypeList);
