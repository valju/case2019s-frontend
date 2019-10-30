import ActionTypes from "../actions/ActionTypes";

export const initialState = {
  isLoading: false,
  userList: []
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.USERS_ALL_REQ:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.USERS_ALL_OK:
      return {
        ...state,
        userList: action.userList,
        isLoading: false,
      }
    case ActionTypes.USERS_ALL_X:
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
