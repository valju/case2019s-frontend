import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mainListItems, secondaryListItems } from './listItems';
import Users from '../views/userViews/Users';
import UserDetailsView from '../views/userViews/UserDetailsView';
import Home from '../views/Home';
import EventTypes from '../views/eventTypeViews/EventTypes';
import EventTypeDetailsView from '../views/eventTypeViews/EventTypeDetailsView';
import LocationTypes from '../views/locationTypeViews/LocationTypes';
import Areas from '../views/areaViews/Areas';
import AreaDetailsView from '../views/areaViews/AreaDetailsView';
import Locations from '../views/locationViews/Locations';
import UrgencyTypes from '../views/urgencyTypeViews/UrgencyTypes';
import AreaUsers from '../views/areaUserViews/AreaUsers';
import LocationDetailsView from '../views/locationViews/LocationDetailsView';

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
            { /* <Route exact path="/" component={Users} /> */}
            <Route exact path="/home" component={Home} />
            <Route exact path="/areas" component={Areas} />
            <Route path="/area/:id" component={AreaDetailsView} />
            <Route path="/eventtypes" component={EventTypes} />
            <Route exact path="/eventtype/:id" component={EventTypeDetailsView} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/locations/:id" component={LocationDetailsView} />
            <Route path="/locationtypes" component={LocationTypes} />
            <Route path="/urgencytypes" component={UrgencyTypes} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:id" component={UserDetailsView} />
            <Route path="/areausers" component={AreaUsers} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navigator;
