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
};
// EvenType_SEARCH_REQ
export const eventTypesSearch_REQ = (keyword) => ({
  type: ActionTypes.EVENTTYPES_SEARCH_REQ,
  keyword: keyword,
});
export const eventTypesSearch_OK = (eventTypeList) => ({
  type: ActionTypes.EVENTTYPES_SEARCH_OK,
  eventTypeList: eventTypeList
});
export const eventTypesSearch_X = () => ({
  type: ActionTypes.EVENTTYPES_SEARCH_X,
});

export function eventTypesSearchByKeyword(keyword) {
  return async (dispatch, getState) => {

    dispatch(eventTypesSearch_REQ(keyword));

    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + `/eventtype/search/${keyword}`,
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(eventTypesSearch_OK(response.data));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(eventTypesSearch_X());
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  }
};

// EventType ADD
export const eventTypeAdd_REQ = (eventType) => ({
  type: ActionTypes.EVENTTYPE_ADD_REQ,
  eventType: eventType,
});
export const eventTypeAdd_OK = () => ({
  type: ActionTypes.EVENTTYPE_ADD_OK,
});
export const eventTypeAdd_X = () => ({
  type: ActionTypes.EVENTTYPE_ADD_X,
});

export function addEventType(eventType) {
  return async (dispatch, getState) => {

    dispatch(eventTypeAdd_REQ(eventType));

    // Here would be some async AJAX call with await...
    // ... or some promises or so
    const ajaxRequest = {
      method: 'post',
      url: API_ROOT + '/eventtype',
      data: eventType,
    };

    axios(ajaxRequest)
      .then(() => {
        dispatch(eventTypeAdd_OK());
        dispatch(fetchAllEventTypes());
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(eventTypeAdd_X());
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  }
};

// EventType DELETE
export const eventTypeDelete_REQ = (id) => ({
  type: ActionTypes.EVENTTYPE_DELETE_REQ,
  id: id,
});
export const eventTypeDelete_OK = () => ({
  type: ActionTypes.EVENTTYPE_DELETE_OK,
});
export const eventTypeDelete_X = () => ({
  type: ActionTypes._DELETE_X,
});

export function deleteEventType(id) {
  return async (dispatch, getState) => {

    dispatch(eventTypeDelete_REQ(id));
    console.dir("Delete by this id: " + id);

    // Here would be some async AJAX call with await...
    // ... or some promises or so
    const ajaxRequest = {
      method: 'delete',
      url: API_ROOT + '/eventtype/' + id,
    };

    axios(ajaxRequest)
      .then(() => {
        dispatch(eventTypeDelete_OK());
        dispatch(fetchAllEventTypes());
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(eventTypeDelete_X());
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  }
};

// EventType GET One By Id
export const eventTypeGetById_REQ = (id) => ({
  type: ActionTypes.EVENTTYPE_GETBYID_REQ,
  id: id,
});
export const eventTypeGetById_OK = (eventType) => ({
  type: ActionTypes.EVENTTYPE_GETBYID_OK,
  eventType: eventType,
});
export const eventTypeGetById_X = () => ({
  type: ActionTypes.EVENTTYPE_GETBYID_X,
});

export function getEventType(id) {
  return async (dispatch, getState) => {
    dispatch(eventTypeGetById_REQ(id));
    console.dir("Get evenType with this id: " + id);

    // Here would be some async AJAX call with await...
    // ... or some promises or so
    const ajaxRequest = {
      method: 'get',
      url: API_ROOT + '/eventtype/' + id
    };

    axios(ajaxRequest)
      .then((response) => {
        dispatch(eventTypeGetById_OK(response.data[0]));
      })
      .catch((error) => {
        console.error("Error: " + error);
        dispatch(eventTypeGetById_X());
      })
      .then(() => {
        return {
          type: null
        }; // 'Empty' action object
      });
  };
}


