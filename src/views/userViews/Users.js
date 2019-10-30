import React, { Component } from 'react'
import UserList from '../../components/userComponents/UserList'

export default class Users extends Component {
    render() {
        return (
            <div>
                <h2>Our Users</h2>
                <UserList />
            </div>
        )
    }
}
