import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllAreaUsers } from '../../actions/areaUsers'
import AreaUserListItem from './AreaUserListItem';

class AreaUserList extends Component {
  componentDidMount() {
    this.props.areaUserFetchAll();
  }

  render() {
    return <div>
      <h3>AreaUser List</h3>
      <ol>{
        this.props.areaUsers.areaUserList.map(item =>
          <AreaUserListItem  key={`${item.areaId}-${item.userId}`} item={item} />)
      }</ol>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  areaUserFetchAll: () => (
    dispatch(fetchAllAreaUsers())
  )

});

const mapStateToProps = state => ({
  areaUsers: state.areaUsers
});

export default connect(mapStateToProps, mapDispatchToProps)(AreaUserList);
