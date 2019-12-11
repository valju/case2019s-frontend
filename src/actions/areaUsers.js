import ActionTypes from "./ActionTypes";
import axios from "axios";
import { API_ROOT } from "../constants/AppConstants";
// import { Action } from 'rxjs/internal/scheduler/Action';

// ACTION CREATORS (Action object creator functions)

// Area_User SHOW ALL
export const areaUserALL_REQ = () => ({
  type: ActionTypes.AREA_USER_ALL_REQ
});

export const AreaUserAll_OK = areaUserList => ({
  type: ActionTypes.AREA_USER_ALL_OK,
  areaUserList: areaUserList
});

export const AreaUserAll_X = () => ({
  type: ActionTypes.AREA_USER_ALL_X
});

export function fetchAllAreaUser() {
  return async (dispatch, getState) => {
    dispatch(areaUserALL_REQ());

    const ajaxRequest = {
      method: "get",
      url: API_ROOT + "/areaUser/all"
    };

    axios(ajaxRequest)
      .then(response => {
        dispatch(AreaUserAll_OK(response.data));
      })
      .catch(error => {
        console.error("Error: " + error);
        dispatch(AreaUserAll_X());
      })
      .then(() => {
        return { type: null }; // 'Empty' action object
      });
  };
}

// Idea_member get by (areaId, userId)
export const areaUserById_REQ = () => ({
  type: ActionTypes.AREA_USER_GETBYID_REQ
});

export const areaUserById_OK = areaUser => ({
  type: ActionTypes.AREA_USER_GETBYID_OK,
  areaUser
});

export const areaUserById_X = () => ({
  type: ActionTypes.AREA_USER_GETBYID_X
});

export function getAreaUserById(areaId, userId) {
  return async (dispatch, getState) => {
    dispatch(areaUserById_REQ());

    const ajaxRequest = {
      method: "get",
      url: API_ROOT + "/areaUser/" + areaId + "/" + userId
    };

    axios(ajaxRequest)
      .then(response => {
        dispatch(areaUserById_OK(response.data));
      })
      .catch(error => {
        console.error("Error: " + error);
        dispatch(areaUserById_X());
      })
      .then(() => {
        return { type: null }; // 'Empty' action object
      });
  };
}

// AreaUser ADD
export const areaUserAdd_REQ = areaUser => ({
  type: ActionTypes.AREA_USER_ADD_REQ,
  areaUser: areaUser
});
export const areaUserAdd_OK = () => ({
  type: ActionTypes.AREA_USER_ADD_OK
});
export const areaUserAdd_X = () => ({
  type: ActionTypes.AREA_USER_ADD_X
});

export function addAreaUser(areaUser) {
  return async (dispatch, getState) => {
    dispatch(areaUserAdd_REQ(areaUser));

    // Here would be some async AJAX call with await...
    // ... or some promises or so
    const ajaxRequest = {
      method: "post",
      url: API_ROOT + "/areaUser/",
      data: areaUser
    };

    axios(ajaxRequest)
      .then(() => {
        dispatch(areaUserAdd_OK());
        dispatch(fetchAllAreaUser());
      })
      .catch(error => {
        console.error("Error: " + error);
        dispatch(areaUserAdd_X());
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  };
}

// Delete area-user

export const areaUserDelete_REQ = () => ({
  type: ActionTypes.AREA_USER_DELETE_REQ
});

export const areaUserDelete_OK = () => ({
  type: ActionTypes.AREA_USER_DELETE_OK
});

export const areaUserDelete_X = () => ({
  type: ActionTypes.AREA_USER_DELETE_X
});

export function deleteAreaUser(areaId, userId) {
  return async (dispatch, getState) => {
    dispatch(areaUserDelete_REQ());
    console.dir(
      "Delete by this (areaId, userId): (" + areaId + ", " + userId + ")"
    );

    const ajaxRequest = {
      method: "delete",
      url: API_ROOT + "/areaUser/" + areaId + "/" + userId
    };

    axios(ajaxRequest)
      .then(() => {
        dispatch(areaUserDelete_OK());
        dispatch(fetchAllAreaUser());
      })
      .catch(error => {
        console.log("Error: " + error);
        dispatch(areaUserDelete_X());
      })
      .then(() => {
        return { type: null };
      });
  };
}
