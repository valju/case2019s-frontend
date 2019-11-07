import React from "react";
import "./App.css";

import Navigator from './router/Navigator';
import Users from "./views/userViews/Users";
import EventTypes from "./views/eventTypeViews/EventTypes";
import UrgencyType from "./views/urgencyTypeViews/UrgencyTypes"

function App() {
  return (
    <div className="App">
      <h1>Testing</h1>
      <Navigator />
      <Users />
      <EventTypes />
      <UrgencyType/>
    </div>
  );
}

export default App;
