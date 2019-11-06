import ActionTypes from "../actions/ActionTypes";

export const initialState = {
  isLoading: false,
  eventTypeList: []
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.EVENTTYPES_ALL_REQ:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.EVENTTYPES_ALL_OK:
      return {
        ...state,
        eventTypeList: action.eventTypeList,
        isLoading: false,
      }
    case ActionTypes.EVENTTYPES_ALL_X:
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
