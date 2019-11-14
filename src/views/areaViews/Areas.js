import React, { Component } from 'react'
import AreaList from '../../components/areaComponents/AreaList';
import { Typography } from "@material-ui/core"

export default class Areas extends Component {
  render() {
    return (
      <div>
        <Typography variant="h2" color="primary">
          Areas
        </Typography>
        <AreaList />
      </div>
    )
  }
}
