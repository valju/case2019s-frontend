import React, { Component } from "react";
import AreaUserList from "../../components/areaUserComponents/AreaUserList";
import AreaUserAdd from "../../components/areaUserComponents/AreaUserAdd";
import AreaUserSearch from "../../components/areaUserComponents/AreaUserSearch";
import { Typography } from "@material-ui/core";

export default class AreaUsers extends Component {
  render() {
    return (
      <div>
        <Typography variant="h2" color="primary">
          AreaUsers
        </Typography>
        <AreaUserSearch />
        <AreaUserAdd />
        <AreaUserList />
      </div>
    );
  }
}
