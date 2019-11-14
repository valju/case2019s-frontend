import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mainListItems, secondaryListItems } from './listItems';
import Users from '../views/userViews/Users';
import UserDetailsView from '../views/userViews/UserDetailsView';
import Home from '../views/Home';
import EventTypes from '../views/eventTypeViews/EventTypes';
import LocationTypes from '../views/locationTypeViews/LocationTypes';
import Locations from '../views/locationViews/Locations';


class Navigator extends Component {

  render() {
    return (
      <Router>
        <div>
          <div>
            <h4>Index</h4>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            { /* <Route exact path="/" component={Users} /> */ }
            <Route exact path="/home" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:id" component={UserDetailsView} />
            <Route path="/eventtypes" component={EventTypes} />
            <Route path="/locationtypes" component={LocationTypes} />
            <Route path="/locations" component={Locations} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default Navigator;
