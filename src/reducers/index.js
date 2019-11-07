import { combineReducers } from "redux";
import users from "./users";
import eventTypes from "./eventTypes";
import urgencyTypes from './urgencyTypes';

const rootReducers = () =>
  combineReducers({
    users,
    eventTypes,
    urgencyTypes
  });

export default rootReducers;
