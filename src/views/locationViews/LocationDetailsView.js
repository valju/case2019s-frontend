import React, { Component } from 'react';
import LocationDetails from '../../components/locationComponents/LocationDetails';

export default class LocationDetailsView extends Component {

  render() {
    return (
      <div>
        <h2>Location Details</h2>
        <LocationDetails id={this.props.match.params.id} />
      </div>
    );
  }
}
