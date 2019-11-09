import ActionTypes from './ActionTypes';
import axios from 'axios';
import { API_ROOT } from '../constants/AppConstants';

export const usersAll_REQ = () => ({
  type: ActionTypes.USERS_ALL_REQ,
});

export const usersAll_OK = (userList) => ({
  type: ActionTypes.USERS_ALL_OK,
  userList: userList
});

export const usersAll_X = () => ({
  type: ActionTypes.USERS_ALL_X,
});

//testing data simulating backend/DB
//const dataUser = [
// { name: "ashley", id: 1 }, { name: "giang", id: 2 }, { name: "felix", id: 3 }, { name: "blerim", id: 4 }, { name: "tony", id: 5 }, { name: "yujing", id: 6}
//]

export function fetchAllUsers() {
  return async (dispatch, getState) => {

    dispatch(usersAll_REQ());

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/user/all',
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(usersAll_OK(response.data));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(usersAll_X());
      })
      .then(() => {
        return {
          type: null
        };
      });
  }
}

export const userGetById_REQ = (id) => ({
  type: ActionTypes.USER_GETBYID_REQ,
  id: id,
});

export const userGetById_OK = (user) => ({
  type: ActionTypes.USER_GETBYID_OK,
  user: user,
});
export const userGetById_X = () => ({
  type: ActionTypes.USER_GETBYID_X,
});

export function getUser(id) {
  return async (dispatch, getState) => {
    dispatch(userGetById_REQ(id));
    console.dir("Get user with this id: " + id);

    // Here would be some async AJAX call with await...
    // ... or some promises or so
    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/user/' + id
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(userGetById_OK(response.data[0]));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(userGetById_X());
      })
      .then(() => {
        return {
          type: null
        };
      });
  };
}
