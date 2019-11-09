import React, { Component } from 'react';
import UserDetails from '../../components/userComponents/UserDetails';

export default class UserDetailsView extends Component {

  render() {
    return (
      <div>
        <h2>User Details</h2>
        <UserDetails id={this.props.match.params.id} />
      </div>
    );
  }
}
