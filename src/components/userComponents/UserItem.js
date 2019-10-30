import React, { Component } from 'react'

export default class UserItem extends Component {
    render() {
        return (
            <div>
                {this.props.item.name}, {this.props.item.id}
            </div>
        )
    }
}
