import ActionTypes from "../actions/ActionTypes";

export const initialState = {
  isLoading: false,
  areaUserList: []
};

export default function areaUsers(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.AREA_USER_ALL_REQ:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.AREA_USER_ALL_OK:
      return {
        ...state,
        areaUserList: action.areaUserList,
        isLoading: false,
      }
    case ActionTypes.AREA_USER_ALL_X:
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


