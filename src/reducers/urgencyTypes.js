import ActionTypes from "../actions/ActionTypes";

export const initialState = {
  isLoading: false,
  urgencyTypeList: []
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.URGENCYTYPES_ALL_REQ:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.URGENCYTYPES_ALL_OK:
      return {
        ...state,
        urgencyTypeList: action.urgencyTypeList,
        isLoading: false,
      }
    case ActionTypes.URGENCYTYPESTYPES_ALL_X:
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
