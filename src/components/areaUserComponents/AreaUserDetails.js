import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAreaUserById } from '../../actions/areaUsers';

class AreaUserDetails extends Component {

  componentDidMount() {
    const { areaId, userId } = this.props.ids
    this.props.areaUserById(areaId, userId)
  }

  render() {
    const { areaId, userId, firstName, lastName, name } = this.props.areaUser.areaUserCurrent
    return (
      <div>
        <b>User:</b> {firstName} {lastName}, ID number {UserId} <br/>
        <b>Area:</b> {name}, ID number {areaId}
        <p>
          <Link to="/areaUser">Back</Link>
        </p>
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => ({
  ideaMemberById: (areaId, userId) => {
    dispatch(getIdeaMemberById(areaId, userId))
  }
});

const mapStateToProps = state => ({
  areaUser: state.areaUsers
});

export default connect(mapStateToProps, mapDispatchToProps)(AreaUserDetails);
