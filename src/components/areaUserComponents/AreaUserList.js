import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllAreaUSer} from '../../actions/areaUser';
import AreaUserListItem from './AreaUserListItem';

class AreaUserList extends Component {

  componentDidMount() {
    this.props.areaUserFetchAll();
    console.log(this.props.areaUsers)
  }

  render() {
    console.log(this.props.areaUsers)

    return (
      <div>
        <h4>List of AreaUser</h4>
        <ol>
          {
            this.props.areaUsers.areaUsersList.map(item =>
              <AreaUserListItem
                key={`${item.areaId}-${item.UserId}`}
                item={item}
            />
            )
          }
        </ol>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  areaUserFetchAll: () => {
    dispatch(fetchAllAreaUSer())
  },

})

const mapStateToProps = (state) => ({
  areaUsers: state.areaUsers
})

export default connect(mapStateToProps, mapDispatchToProps)(AreaUserList);
