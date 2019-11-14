import React, { Component } from 'react'
import LocationList from '../../components/locationComponents/LocationList'
import { Typography } from "@material-ui/core"

export default class Locations extends Component {
  render() {
    return (
      <div>
        <Typography variant="h2">
          Our Locations
        </Typography>
        <LocationList />
      </div>
    )
  }
}
