import ActionTypes from './ActionTypes';
import axios from 'axios';
import { API_ROOT } from '../constants/AppConstants';

export const areasAll_REQ = () => ({
  type: ActionTypes.AREAS_ALL_REQ,
});

export const areasAll_OK = (areaList) => ({
  type: ActionTypes.AREAS_ALL_OK,
  areaList: areaList
});

export const areasAll_X = () => ({
  type: ActionTypes.AREAS_ALL_X,
});

export function fetchAllAreas() {
  return async (dispatch, getState) => {

    dispatch(areasAll_REQ());

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/area/all',
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(areasAll_OK(response.data));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(areasAll_X());
      })
      .then(() => {
        return {
          type: null
        };
      });
  }
}
