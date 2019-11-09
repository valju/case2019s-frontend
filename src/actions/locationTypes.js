import ActionTypes from './ActionTypes';
import axios from 'axios';
import { API_ROOT } from '../constants/AppConstants';

export const locationTypesAll_REQ = () => ({
  type: ActionTypes.LOCATIONTYPES_ALL_REQ,
});

export const locationTypesAll_OK = (locationTypeList) => ({
  type: ActionTypes.LOCATIONTYPES_ALL_OK,
  locationTypeList: locationTypeList
});

export const locationTypesAll_X = () => ({
  type: ActionTypes.LOCATIONTYPES_ALL_X,
});

export function fetchAllLocationTypes() {
  return async (dispatch, getState) => {

    dispatch(locationTypesAll_REQ());

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/locationType/all',
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(locationTypesAll_OK(response.data));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(locationTypesAll_X());
      })
      .then(() => {
        return {
          type: null
        };
      });
  }
}
