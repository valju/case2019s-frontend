import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllAreas, deleteArea } from '../../actions/areaTypes'
import AreaListItem from "./AreaListItem";

class AreaList extends Component {
  componentDidMount() {
    this.props.areaFetchAll();
  }

  render() {
    return <div>
      <h3>Area Type List</h3>
      <ol>{
        this.props.areas.areaList.map(item =>
          <AreaListItem
            key={item.id}
            item={item}
            delete={this.props.deleteAreaLocal}
            />)
      }</ol>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  areaFetchAll: () => (
    dispatch(fetchAllAreas())
  ),
  deleteAreaLocal: (id) => {
    dispatch(deleteArea(id))
  }
});

const mapStateToProps = state => ({
  areas: state.areas
});

export default connect(mapStateToProps, mapDispatchToProps)(AreaList);
