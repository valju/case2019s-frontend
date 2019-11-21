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
  const [keyNames, setKeyNames] = React.useState([])
  const classes = useTableStyles()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  console.log("userList", users)
  //Lazy way to display data
  useEffect(() => {
    if (!users.isLoading) {
      setKeyNames(Object.keys(users.userList[0])) // get all the property name of an object, return array
    }
  }, [users.isLoading, users.userList])


  function getKeyValues(obj) {
    return Object.values(obj)
  }
  return (
    <div>
      <h3>User List</h3>

      <Table className={classes.root} stickyHeader aria-label="User table">
        <TableHead >
          <TableRow >
            {keyNames.map((name, i) =>
              <TableCell key={i} variant='head'>
                {name.toUpperCase()}
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.userList.map(user =>
            <TableRow
              hover key={user.id} >
              {getKeyValues(user).map((value, i) => {
                return (
                  <TableCell key={i} variant='body'>
                    {value}
                  </TableCell>
                )
              })}
              <TableCell padding="checkbox">
                <Button
                  onClick={e => {
                    e.preventDefault()
                    history.push(`/users/${user.id}`)
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


