import ActionTypes from "../actions/ActionTypes";

export const initialState = {
  isLoading: false,
  areaList: [],
  areaCurrent: null,
};

export default function areas(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.AREAS_ALL_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.AREAS_ALL_OK:
      return {
        ...state,
        areaList: action.areaList,
        isLoading: false,
      };
    case ActionTypes.AREAS_ALL_X:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.AREA_GETBYID_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.AREA_GETBYID_OK:
      return {
        ...state,
        areaCurrent: action.area,
        isLoading: false,
      };
    case ActionTypes.AREA_GETBYID_X:
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.AREA_DELETE_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.AREA_DELETE_OK:
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.AREA_DELETE_X:
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
