import React, { Component } from 'react';

import { getUser } from '../../actions/users';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BrushIcon from '@material-ui/icons/Brush';
import BuildIcon from '@material-ui/icons/Build';
import { Icon } from '@material-ui/core';

class UserDetails extends Component {
  componentDidMount() {
    this.props.userGetById(this.props.id);
  }

  render() {
    return (
      <div>
        {(!this.props.users || !this.props.users.userCurrent) ? (
          <p>Waiting server response. Activity indicator could go here.</p>
        ) : (
            <div>
              {/*<UserItem item={this.props.users.userCurrent} />*/}
              <Link to={`/user/update/${this.props.users.userCurrent.id}`}>Update</Link>
              <br />
              {!this.props.users.userCurrent.isAdmin ?
                <Icon><BrushIcon /></Icon> :
                <Icon><BuildIcon /></Icon>
              }
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
