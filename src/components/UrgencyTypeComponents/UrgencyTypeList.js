import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllUrgencyTypes } from '../../actions/urgencyTypes';
import UrgencyTypeListItem from './UrgencyTypeListItem';

class UrgencyTypeList extends Component {
  componentDidMount() {
    this.props.urgencyTypeFetchAll();
  }

  render() {
    return <div>
      <h3>UrgencyType List</h3>
      <ol>{
        this.props.urgencyTypes.urgencyTypeList.map(item =>
          <UrgencyTypeListItem key={item.id} item={item} />)
      }</ol>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  urgencyTypeFetchAll: () => (
    dispatch(fetchAllUrgencyTypes())
  )

});

const mapStateToProps = state => ({
  urgencyTypes: state.urgencyTypes
});

export default connect(mapStateToProps, mapDispatchToProps)(UrgencyTypeList);
