import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mainListItems, secondaryListItems } from './listItems';
import Users from '../views/userViews/Users';
import UserDetailsView from '../views/userViews/UserDetailsView';
import Home from '../views/userViews/Home';
import EventTypes from '../views/eventTypeViews/EventTypes';

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
            { /* <Route exact path="/" component={HomeView} /> */}
            <Route exact path="/" component={Users} />
            { /* <Route exact path="/home" component={HomeView} /> */}
            <Route exact path="/home" component={Home} />
            <Route path="/users" component={Users} />
            <Route exact path="/users/:id" component={UserDetailsView} />
            <Route path="/eventtypes" component={EventTypes} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default Navigator;
