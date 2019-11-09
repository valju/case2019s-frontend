import { combineReducers } from "redux";

import users from "./users";
import eventTypes from "./eventTypes";
import urgencyTypes from './urgencyTypes';
import locationTypes from "./locationTypes";

const rootReducers = () =>
  combineReducers({
    users,
    eventTypes,
    urgencyTypes,
    locationTypes,
  });

export default rootReducers;
