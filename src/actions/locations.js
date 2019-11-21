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

export const locationGetById_REQ = (id) => ({
  type: ActionTypes.LOCATION_GETBYID_REQ,
  id: id,
});

export const locationGetById_OK = (location) => ({
  type: ActionTypes.LOCATION_GETBYID_OK,
  location: location,
});
export const locationGetById_X = () => ({
  type: ActionTypes.LOCATION_GETBYID_X,
});

export function getLocation(id) {
  return async (dispatch, getState) => {
    dispatch(locationGetById_REQ(id));

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/location/' + id
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(locationGetById_OK(response.data[0]));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(locationGetById_X());
      })
      .then(() => {
        return {
          type: null
        };
      });
  };
}

export const locationDelete_REQ = (id) => ({
  type: ActionTypes.LOCATION_DELETE_REQ,
  id: id,
});
export const locationDelete_OK = () => ({
  type: ActionTypes.LOCATION_DELETE_OK,
});
export const locationDelete_X = () => ({
  type: ActionTypes.LOCATION_DELETE_X,
});

export function deleteLocation(id) {
  return async (dispatch, getState) => {
    dispatch(locationDelete_REQ(id));

    const ajaxRequest = {
      method: 'delete',
      url: API_ROOT + '/location/' + id,
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(locationDelete_OK());
        dispatch(fetchAllLocations());
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(locationDelete_X());
      })
      .then(() => {
        return {
          type: null
        }
      });
  }
};
