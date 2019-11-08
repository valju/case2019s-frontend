import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllLocationTypes } from '../../actions/locationTypes';
import LocationTypeItem from './LocationTypeItem';

class LocationTypeList extends Component {
  componentDidMount() {
    this.props.locationTypeFetchAll();
  }

  render() {
    return <div>
      <h3>Location Type List</h3>
      <ol>{
        this.props.locationTypes.locationTypeList.map(item =>
          <LocationTypeItem key={item.id} item={item} />)
      }</ol>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  locationTypeFetchAll: () => (
    dispatch(fetchAllLocationTypes())
  )

});

const mapStateToProps = state => ({
  locationTypes: state.locationTypes
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationTypeList);
