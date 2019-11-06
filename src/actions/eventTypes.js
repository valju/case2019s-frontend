import ActionTypes from './ActionTypes';
import axios from 'axios';
import { API_ROOT } from '../constants/AppConstants'

export const eventTypesAll_REQ = () => ({
  type: ActionTypes.EVENTTYPES_ALL_REQ,
});

export const eventTypesAll_OK = (eventTypeList) => ({
  type: ActionTypes.EVENTTYPES_ALL_OK,
  eventTypeList: eventTypeList
});

export const eventTypesAll_X = () => ({
  type: ActionTypes.EVENTTYPES_ALL_X,
});

export function fetchAllEventTypes() {
  return async (dispatch, getState) => {

    dispatch(eventTypesAll_REQ());

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/eventType/all',
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(eventTypesAll_OK(response.data));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(eventTypesAll_X());
      })
      .then(() => {
        return {
          type: null
        };
      });
  }
}
