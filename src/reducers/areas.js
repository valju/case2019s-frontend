import ActionTypes from "../actions/ActionTypes";

export const initialState = {
  isLoading: false,
  areaList: []
};

export default function areas(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.AREAS_ALL_REQ:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.AREAS_ALL_OK:
      return {
        ...state,
        areaList: action.areaList,
        isLoading: false,
      }
    case ActionTypes.AREAS_ALL_X:
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
