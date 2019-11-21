import ActionTypes from './ActionTypes';
import axios from 'axios';
import { API_ROOT } from '../constants/AppConstants'

export const areaUsersAll_REQ = () => ({
  type: ActionTypes.AREA_USER_ALL_REQ,
});

export const areaUsersAll_OK = (areaUserList) => ({
  type: ActionTypes.AREA_USER_ALL_OK,
  areaUserList: areaUserList
});

export const areaUsersAll_X = () => ({
  type: ActionTypes.AREA_USER_ALL_X,
});

export function fetchAllAreaUsers() {
  return async (dispatch, getState) => {

    dispatch(areaUsersAll_REQ());

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/areaUser/all',
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(areaUsersAll_OK(response.data));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(areaUsersAll_X());
      })
      .then(() => {
        return {
          type: null
        };
      });
  }
}
