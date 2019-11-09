import ActionTypes from './ActionTypes';
import axios from 'axios';
import { API_ROOT } from '../constants/AppConstants'

export const urgencyTypesAll_REQ = () => ({
  type: ActionTypes.URGENCYTYPES_ALL_REQ,
});

export const urgencyTypesAll_OK = (urgencyTypeList) => ({
  type: ActionTypes.URGENCYTYPES_ALL_OK,
  urgencyTypeList: urgencyTypeList
});

export const urgencyTypesAll_X = () => ({
  type: ActionTypes.URGENCYTYPES_ALL_X,
});

export function fetchAllUrgencyTypes() {
  return async (dispatch, getState) => {

    dispatch(urgencyTypesAll_REQ());

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/urgencyType/all',
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(urgencyTypesAll_OK(response.data));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(urgencyTypesAll_X());
      })
      .then(() => {
        return {
          type: null
        };
      });
  }
}
