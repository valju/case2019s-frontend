import { combineReducers } from "redux";

import users from "./users";
import eventTypes from "./eventTypes";
import urgencyTypes from './urgencyTypes';
import locationTypes from "./locationTypes";
import areas from './areas';

const rootReducers = () =>
  combineReducers({
    users,
    eventTypes,
    urgencyTypes,
    locationTypes,
    areas,
  });

export default rootReducers;
