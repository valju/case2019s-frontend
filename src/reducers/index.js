import { combineReducers } from "redux";

import users from "./users";
import eventTypes from "./eventTypes";
import urgencyTypes from './urgencyTypes';
import locationTypes from "./locationTypes";
import areas from './areas';
import locations from "./locations";
import areaUsers from "./areaUsers";
const rootReducers = () =>
  combineReducers({
    areas,
    eventTypes,
    locations,
    locationTypes,
    urgencyTypes,
    users,
    areaUsers
  });

export default rootReducers;
