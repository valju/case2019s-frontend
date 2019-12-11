import React, { Component } from "react";
import AreaUserItem from "./AreaUserItem";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class AreaUserListItem extends Component {
  render() {
    const { areaId, userId } = this.props.item;
    return (
      <li style={{ listStyle: "none" }}>
        <div>
          <AreaUserItem item={this.props.item} />
        </div>
        <Link to={"/areaUsers/" + areaId + "/" + userId}>
          <Button variant="contained" color="primary">
            VIEW
          </Button>
        </Link>

        <Button
          variant="contained"
          color="primary"
          onClick={() => this.props.delete(areaId, userId)}
        >
          DELETE
        </Button>
        <hr />
      </li>
    );
  }
}

export default AreaUserListItem;
