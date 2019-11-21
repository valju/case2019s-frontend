import ActionTypes from './ActionTypes';
import axios from 'axios';
import { API_ROOT } from '../constants/AppConstants';


// AREA GET ALL
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

// AREA GET BY ID
export const areaGetById_REQ = (id) => ({
  type: ActionTypes.AREA_GETBYID_REQ,
  id: id,
});
export const areaGetById_OK = (area) => ({
  type: ActionTypes.AREA_GETBYID_OK,
  area: area,
});
export const areaGetById_X = () => ({
  type: ActionTypes.AREA_GETBYID_X,
});

export function getArea(id) {
  return async (dispatch, getState) => {
    dispatch(areaGetById_REQ(id));

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/area/' + id
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(areaGetById_OK(response.data[0]));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(areaGetById_X());
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  };
}

// DELETE AREA
export const areaDelete_REQ = (id) => ({
  type: ActionTypes.AREA_DELETE_REQ,
  id: id,
});
export const areaDelete_OK = () => ({
  type: ActionTypes.AREA_DELETE_OK,
});
export const areaDelete_X = () => ({
  type: ActionTypes.AREA_DELETE_X,
});

export function deleteArea(id) {
  return async (dispatch, getState) => {

    dispatch(areaDelete_REQ(id));
    console.dir("Area delete by this id: " + id);

    const ajaxRequest = {
      method: 'delete',
      url: API_ROOT + '/area/' + id,
    };

    axios(ajaxRequest)
      .then(() => {
        dispatch(areaDelete_OK());
        dispatch(fetchAllAreas());
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(areaDelete_X());
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  }
};
