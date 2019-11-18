export default function areaUser(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.AREA_USER_ALL_REQ:
      return {
        ...state,
        isLoading: true,
             };

    case ActionTypes.AREA_USER_ALL_OK:
      return {
        ...state,
        isLoading: false,
        areaUserList: action.areaUserList,
      }

    case ActionTypes.AREA_USER_ALL_X:
      return {
        ...state,
        isLoading: false,
      }

    case ActionTypes.AREA_USER_GETBYID_REQ:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.AREA_USER_GETBYID_OK:
     return {
       ...state,
       isLoading: false,
       areaUserCurrent: action.areaUser
     }

    case ActionTypes.AREA_USER_GETBYID_X:
      return {
        ...state,
        isLoading: false,
      }

    case null:
        return state;
      default:
        return state;

  }
}
