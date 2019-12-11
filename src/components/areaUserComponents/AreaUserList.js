import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllAreaUser, deleteAreaUser } from "../../actions/areaUsers";
import AreaUserListItem from "./AreaUserListItem";

class AreaUserList extends Component {
  componentDidMount() {
    this.props.areaUserFetchAll();
    console.log(this.props.areaUsers);
  }

  render() {
    console.log(this.props.areaUsers);

    return (
      <div>
        <h4>List of Area-User</h4>
        <ol>
          {this.props.areaUsers.areaUserList.map(item => (
            <AreaUserListItem
              key={`${item.areaId}-${item.userId}`}
              item={item}
              delete={this.props.deleteAreaUserLocal}
            />
          ))}
        </ol>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  areaUserFetchAll: () => {
    dispatch(fetchAllAreaUser());
  },
  deleteAreaUserLocal: (areaId, userId) => {
    dispatch(deleteAreaUser(areaId, userId));
  }
});

const mapStateToProps = state => ({
  areaUsers: state.areaUsers
});

export default connect(mapStateToProps, mapDispatchToProps)(AreaUserList);
