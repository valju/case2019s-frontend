import ActionTypes from "../actions/ActionTypes";

export const initialState = {
  isLoading: false,
  locationList: []
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
    case null:
      return state;
    default:
      return state;
  }
}
