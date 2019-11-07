import React, { Component } from 'react'
import UrgencyTypeList from '../../components/UrgencyTypeComponents/UrgencyTypeList'
import { Typography } from "@material-ui/core"

export default class UrgencyTypes extends Component {
  render() {
    return (
      <div>
        <Typography variant="h2" color="primary">
          Our EUrgencyTypes
        </Typography>
        <UrgencyTypeList />
      </div>
    )
  }
}
