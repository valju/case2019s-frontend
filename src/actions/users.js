import ActionTypes from './ActionTypes'; // import axios from 'axios';

export const usersAll_REQ = () => ({
    type: ActionTypes.USERS_ALL_REQ,
});

export const usersAll_OK = (userList) => ({
    type: ActionTypes.USERS_ALL_OK,
    userList: userList
});

export const usersAll_X = () => ({
    type: ActionTypes.USERS_ALL_X,
});

//testing data simulating backend/DB
const dataUser = [
    { name: "ashley", id: 1 }, { name: "giang", id: 2 }, { name: "felix", id: 3 }, { name: "blerim", id: 4 }
]

export function fetchAllUsers() {
    return async (dispatch, getState) => {

        dispatch(usersAll_REQ());

        // const ajaxRequest = {
        //   method: 'get',
        //   url: API_ROOT + '/users',
        // };
        dispatch(usersAll_OK(dataUser))
        //     axios(ajaxRequest)
        //   .then((response) => {
        //     dispatch(usersAll_OK(response.data));
        //   })
        //   .catch((error) => {
        //     console.error("Error: " + error);
        //     dispatch(usersAll_X());
        //   })
        //   .then(() => {
             return {
               type: null
             };
        //   });
    }
}
