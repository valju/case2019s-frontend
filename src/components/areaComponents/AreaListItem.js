import React, { Component } from 'react';
import AreaItem from './AreaItem';
import { Link } from 'react-router-dom';

export default class AreaListItem extends Component {

  render() {
    return (
      <li>
        <AreaItem item={this.props.item} />
        &nbsp;&nbsp;
        <Link to={`/area/${this.props.item.id}`}>View</Link>
        &nbsp;&nbsp;
        <button type='button' onClick={()=> this.props.delete(this.props.item.id)} >Delete</button>
        <hr />
      </li>
    )
  }
}
