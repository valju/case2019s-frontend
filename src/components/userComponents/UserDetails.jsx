import React, { Component } from 'react';
import UserItem from './UserItem';
import { getUser } from '../../actions/users';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class UserDetails extends Component {
  componentWillMount() {
    this.props.userGetById(this.props.id);
  }

  render() {
    return (
      <div>
        {this.props.users.userCurrent === null ? (
          <p>Waiting server response. Activity indicator could go here.</p>
        ) : (
            <div>
              <UserItem item={this.props.users.userCurrent} />
              <Link to={`/user/update/${this.props.users.userCurrent.id}`}>Update</Link>
            </div>
          )}

        <p>
          <Link to='/users'>Back</Link>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userGetById: (id) => {
    dispatch(getUser(id));
  }
});

const mapStateToProps = state => ({
  users: state.users,
});

export default connect
(mapStateToProps,mapDispatchToProps,)
(UserDetails);

