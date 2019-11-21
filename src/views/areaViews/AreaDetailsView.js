import React, { Component } from 'react';
import AreaDetails from '../../components/areaComponents/AreaDetails';

export default class AreaDetailsView extends Component {

  render() {
    return (
      <div>
        <h2>Area Details</h2>
        <AreaDetails id={this.props.match.params.id} />
      </div>
    );
  }
}
