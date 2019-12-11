import React, { Component } from "react";

class AreaUserItem extends Component {
  render() {
    const { firstName, lastName, name } = this.props.item;
    return (
      <div className="card text-center">
        <h2>
          {name} {firstName} {lastName}
        </h2>
      </div>
    );
  }
}

export default AreaUserItem;
