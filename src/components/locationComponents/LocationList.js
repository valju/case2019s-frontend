import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllLocations } from '../../actions/locations';
import LocationItem from './LocationItem';

class LocationList extends Component {
  componentDidMount() {
    this.props.locationFetchAll();
  }

  render() {
    return <div>
      <h3>Location List</h3>
      <ol>{
        this.props.locations.locationList.map(item =>
          <LocationItem key={item.id} item={item} />)
      }</ol>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  locationFetchAll: () => (
    dispatch(fetchAllLocations())
  )

});

const mapStateToProps = state => ({
  locations: state.locations
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
