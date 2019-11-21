import ActionTypes from "../actions/ActionTypes";

export const initialState = {
  isLoading: false,
  eventTypeList: [],
  eventTypeSearchList: [],
  eventTypeCurrent: null
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.EVENTTYPES_ALL_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.EVENTTYPES_ALL_OK:
      return {
        ...state,
        eventTypeList: action.eventTypeList,
        isLoading: false
      };
    case ActionTypes.EVENTTYPES_ALL_X:
      return {
        ...state,
        isLoading: false
      };

    case ActionTypes.EVENTTYPES_SEARCH_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.EVENTTYPES_SEARCH_OK:
      return {
        ...state,
        eventTypeSearchList: action.eventTypeList,
        isLoading: false
      };
    case ActionTypes.EVENTTYPES_SEARCH_X:
      return {
        ...state,
        isLoading: false
      };

    case ActionTypes.EVENTTYPE_DELETE_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.EVENTTYPE_DELETE_OK:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.EVENTTYPE_DELETE_X:
      return {
        ...state,
        isLoading: false
      };

    case ActionTypes.EVENTTYPE_GETBYID_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.EVENTTYPE_GETBYID_OK:
      return {
        ...state,
        eventTypeCurrent: action.eventType,
        isLoading: false
      };
    case ActionTypes.EVENTTYPE_GETBYID_X:
      return {
        ...state,
        isLoading: false
      };

    // case ActionTypes.EVENTTYPE_UPDATE_REQ:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case ActionTypes.EVENTTYPE_UPDATE_OK:
    //   return {
    //     ...state,
    //     eventTypeCurrent: action.eventType,
    //     isLoading: false
    //   };
    // case ActionTypes.EVENTTYPE_UPDATE_X:
    //   return {
    //     ...state,
    //     isLoading: false
    //   };

    case null:
      return state;
    default:
      return state;
  }
}
