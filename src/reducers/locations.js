import ActionTypes from "../actions/ActionTypes";

export const initialState = {
  isLoading: false,
  locationList: [],
  locationCurrent: null,
};

export default function locations(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOCATIONS_ALL_REQ:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.LOCATIONS_ALL_OK:
      return {
        ...state,
        locationList: action.locationList,
        isLoading: false,
      }
    case ActionTypes.LOCATIONS_ALL_X:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.LOCATION_GETBYID_REQ:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.LOCATION_GETBYID_OK:
      return {
        ...state,
        locationCurrent: action.location,
        isLoading: false,
      }
    case ActionTypes.LOCATION_GETBYID_X:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.LOCATION_DELETE_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.LOCATION_DELETE_OK:
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.LOCATION_DELETE_X:
      return {
        ...state,
        isLoading: false,
      };
    case null:
      return state;
    default:
      return state;
  }
}

