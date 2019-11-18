import ActionTypes from './ActionTypes';
import axios from 'axios';
import { API_ROOT } from '../constants/AppConstants';
// import { Action } from 'rxjs/internal/scheduler/Action';

// ACTION CREATORS (Action object creator functions)

// Area_User SHOW ALL
export const areaUserALL_REQ = () => ({
  type: ActionTypes.AREA_USER_ALL_REQ,
});

export const AreaUserAll_OK = (areaUserList) => ({
  type: ActionTypes.AREA_USER_ALL_OK,
  areaUserList
});

export const AreaUserAll_X = () => ({
  type: ActionTypes.AREA_USER_ALL_X,
});

export function fetchAllAreaUser() {
  return async (dispatch, getState) => {

    dispatch(areaUserALL_REQ());

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/areaUser/all'
    };

    axios(ajaxRequest)
    .then((response => {
      dispatch(AreaUserAll_OK(response.data))
    }))
    .catch((error) => {
      console.error("Error: " + error);
      dispatch(AreaUserAll_X())
    })
    .then(() => {
      return { type: null } // 'Empty' action object
    })
  }
}

// Idea_member get by (areaId, userId)
export const areaUserById_REQ = () => ({
  type: ActionTypes.AREA_USER_GETBYID_REQ,
});

export const areaUserById_REQ_OK = (areaUser) => ({
  type: ActionTypes.AREA_USER_GETBYID_OK,
  areaUser
});

export const areaUserById_X = () => ({
  type: ActionTypes.AREA_USER_GETBYID_X,
});

export function getAreaUserById(areaId, userId) {
  return async (dispatch, getState) => {
    dispatch(areaUserById_REQ())

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/areaUser/' + areaId + '/' + userId
    };

    axios(ajaxRequest)
    .then(response => {
      dispatch(areaUserById_OK(response.data))
    })
    .catch(error => {
      console.error("Error: " + error)
      dispatch(areaUserById_X())
    })
    .then(() => {
      return { type: null } // 'Empty' action object
    })
  }
}
