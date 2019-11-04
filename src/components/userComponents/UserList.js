import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllUsers } from '../../actions/users'
import UserListItem from './UserListItem';

class UserList extends Component {
  componentDidMount() {
    this.props.userFetchAll();
  }

  render() {
    return <div>
      <h3>User List</h3>
      <ol>{
        this.props.users.userList.map(item =>
          <UserListItem key={item.id} item={item} />)
      }</ol>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  userFetchAll: () => (
    dispatch(fetchAllUsers())
  )

});

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
