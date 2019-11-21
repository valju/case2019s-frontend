import React, { Component } from 'react';
import LocationItem from './LocationItem';
import { getLocation } from '../../actions/locations';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BrushIcon from '@material-ui/icons/Brush';
import BuildIcon from '@material-ui/icons/Build';
import { Icon } from '@material-ui/core';

class LocationDetails extends Component {
  componentDidMount() {
    this.props.locationGetById(this.props.id);
  }

  render() {
    return (
      <div>
        {(!this.props.locations || !this.props.locations.locationCurrent) ? (
          <p>Waiting server response. Activity indicator could go here.</p>
        ) : (
            <div>
              <LocationItem item={this.props.locations.locationCurrent} />
              <Link to={`/location/update/${this.props.locations.locationCurrent.id}`}>Update</Link>
              <br />
              {!this.props.locations.locationCurrent.isAdmin ?
                <Icon><BrushIcon /></Icon> :
                <Icon><BuildIcon /></Icon>
              }
            </div>
          )}

        <p>
          <Link to='/locations'>Back</Link>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  locationGetById: (id) => {
    dispatch(getLocation(id));
  }
});

const mapStateToProps = state => ({
  locations: state.locations,
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails);
