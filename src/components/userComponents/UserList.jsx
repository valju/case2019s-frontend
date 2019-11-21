import React, { useEffect } from "react";
import { fetchAllUsers } from '../../actions/users'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button'

const UserList = () => {
  const dispatch = useDispatch()
  let history = useHistory()
  const users = useSelector(state => state.users)

  const classes = useTableStyles()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div>
      <h3>User List</h3>

      <Table className={classes.root} stickyHeader aria-label="User table">
        <TableHead >
          <TableRow >
            <TableCell variant='head'> First Name</TableCell>
            <TableCell variant='head'>Last Name</TableCell>
            <TableCell variant='head'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.userList.map(({ id, firstName, lastName, email }) =>
            <TableRow key={id}>
              <TableCell variant='head'> {firstName}</TableCell>
              <TableCell variant='head'>{lastName}</TableCell>
              <TableCell variant='head'>{email}</TableCell>
              <TableCell padding="checkbox">
                <Button
                  onClick={e => {
                    e.preventDefault()
                    history.push(`/users/${id}`)
                  }}
                  variant="contained" color="secondary" size="small">Edit</Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default UserList


const useTableStyles = makeStyles(theme => ({
  root: {
    overflowX: 'auto',
    width: '90%',
    maxHeight: 'calc(100vh - 204px )',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    marginBottom: 50,
    padding: '0 20px 20px',

  }

}))


