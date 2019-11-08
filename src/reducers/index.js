import { combineReducers } from "redux";
import users from "./users";
import eventTypes from "./eventTypes";
import locationTypes from "./locationTypes";

const rootReducers = () =>
  combineReducers({
    users,
    eventTypes,
    locationTypes,
  });

export default rootReducers;
