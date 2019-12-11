import React, { Component } from "react";
import AreaUserDetails from "../../components/areaUserComponents/AreaUserDetails";

class AreaUserDetailsView extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Area-User Details</h2>
        <AreaUserDetails id={this.props.match.params.ids} />
      </div>
    );
  }
}

export default AreaUserDetailsView;
