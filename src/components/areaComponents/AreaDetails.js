import React, { Component } from 'react';
import AreaItem from './AreaItem';
import { getArea } from '../../actions/areaTypes'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class AreaDetails extends Component {
  componentDidMount() {
    this.props.areaGetById(this.props.id);
  }
  render() {
    return(
    <div>
      {this.props.areas.areaCurrent === null ? (
        <p>Waiting server response. Activity indicator could go here.</p>
      ) : (
          <div>
            <AreaItem item={this.props.areas.areaCurrent} />
            {/*
              // for leater use to update the area
              //<Link to={`/areas/update/${this.props.areas.areaCurrent.id}`}>Update</Link>
              */}
          </div>
        )}
      <p>
        <Link to='/areas'>Back</Link>
      </p>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  areaGetById: (id) => {
    dispatch(getArea(id));
  }
});

const mapStateToProps = state => ({
  areas: state.areas,
});

export default connect(mapStateToProps, mapDispatchToProps)(AreaDetails);
