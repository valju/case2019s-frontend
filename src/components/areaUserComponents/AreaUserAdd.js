import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllUsers } from "../../actions/users";
import { fetchAllAreas } from "../../actions/areaTypes";
import { addAreaUser } from "../../actions/areaUsers";

class AreaUserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areaId: null,
      userId: null
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllAreasLocal();
    this.props.fetchAllUsersLocal();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: Number(event.target.value)
    });
  };

  addAreaUser = () => {
    console.log(this.state);
    console.log(this.props);

    const { areaId, userId } = this.state;
    const newAreaUser = { areaId, userId };
    this.props.addAreaUserLocal(newAreaUser);
  };

  render() {
    return (
      <div>
        <h4>Add new Area-user</h4>
        <div>
          <label htmlFor="areaId">Area</label>

          <select id="areaId" name="areaId" onChange={this.handleChange}>
            <option>SELECT AREA</option>
            {this.props.areaList.map(item => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="userId">User</label>
          <select id="userId" name="userId" onChange={this.handleChange}>
            <option>SELECT USER</option>
            {this.props.userList.map(item => (
              <option key={item.id} value={item.id}>
                {item.firstName} {item.lastName}
              </option>
            ))}
          </select>
        </div>

        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
          disabled={this.state.areaId === null || this.state.userId === null}
          onClick={this.addAreaUser}
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllUsersLocal: () => {
    dispatch(fetchAllUsers());
  },
  fetchAllAreasLocal: () => {
    dispatch(fetchAllAreas());
  },
  addAreaUserLocal: newAreaUser => {
    dispatch(addAreaUser(newAreaUser));
  }
});

const mapStateToProps = state => ({
  userList: state.users.userList,
  areaList: state.areas.areaList
});

export default connect(mapStateToProps, mapDispatchToProps)(AreaUserAdd);
