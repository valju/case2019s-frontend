import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllAreas } from '../../actions/areasType'
import AreaListItem from "./AreaListItem";

class AreaList extends Component {
  componentDidMount() {
    this.props.areaFetchAll();
  }

  render() {
    return <div>
      <h3>EventType List</h3>
      <ol>{
        this.props.areas.areaList.map(item =>
          <AreaListItem key={item.id} item={item} />)
      }</ol>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  areaFetchAll: () => (
    dispatch(fetchAllAreas())
  )

});

const mapStateToProps = state => ({
  areas: state.areas
});

export default connect(mapStateToProps, mapDispatchToProps)(AreaList);
