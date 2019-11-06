import { combineReducers } from "redux";
import users from "./users";
import eventTypes from "./eventTypes";

const rootReducers = () =>
  combineReducers({
    users,
    eventTypes
  });

export default rootReducers;
