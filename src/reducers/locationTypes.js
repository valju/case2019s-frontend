import ActionTypes from "../actions/ActionTypes";

export const initialState = {
  isLoading: false,
  locationTypeList: []
};

export default function locationTypes(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOCATIONTYPES_ALL_REQ:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.LOCATIONTYPES_ALL_OK:
      return {
        ...state,
        locationTypeList: action.locationTypeList,
        isLoading: false,
      }
    case ActionTypes.LOCATIONTYPES_ALL_X:
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
