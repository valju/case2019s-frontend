import React, { Component } from 'react'
import AreaList from '../../components/areaComponents/AreaList';
import { Typography } from "@material-ui/core"

export default class AreaUsers extends Component {
  render() {
    return (
      <div>
        <Typography variant="h2" color="primary">
        AreaUsers
        </Typography>
        <AreaList />
      </div>
    )
  }
}
