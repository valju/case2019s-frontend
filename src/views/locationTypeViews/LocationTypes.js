import React, { Component } from 'react'
import LocationTypeList from '../../components/locationTypeComponents/LocationTypeList'
import { Typography } from "@material-ui/core"

export default class LocationTypes extends Component {
  render() {
    return (
      <div>
        <Typography variant="h2">
          Our LocationTypes
        </Typography>
        <LocationTypeList />
      </div>
    )
  }
}
