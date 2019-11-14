import ActionTypes from './ActionTypes';
import axios from 'axios';
import { API_ROOT } from '../constants/AppConstants';

export const locationsAll_REQ = () => ({
  type: ActionTypes.LOCATIONS_ALL_REQ,
});

export const locationsAll_OK = (locationList) => ({
  type: ActionTypes.LOCATIONS_ALL_OK,
  locationList: locationList
});

export const locationsAll_X = () => ({
  type: ActionTypes.LOCATIONS_ALL_X,
});

export function fetchAllLocations() {
  return async (dispatch, getState) => {

    dispatch(locationsAll_REQ());

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/location/all',
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(locationsAll_OK(response.data));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(locationsAll_X());
      })
      .then(() => {
        return {
          type: null
        };
      });
  }
}
