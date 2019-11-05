import React, { Component } from 'react'
import UserList from '../../components/userComponents/UserList'
import { Typography } from "@material-ui/core"

export default class Users extends Component {
  render() {
    return (
      <div>
        <Typography variant="h2" color="primary">
          Our Users
        </Typography>
        <UserList />
      </div>
    )
  }
}
