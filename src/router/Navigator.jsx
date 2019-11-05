import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


import { mainListItems, secondaryListItems } from './listItems';

import Users from '../views/userViews/Users';
import UserDetailsView from '../views/userViews/UserDetailsView';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    //padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    //width: '20%',
    //maxWidth: 240,
    width: 200,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  h4: {

  }
});

class Navigator extends Component {
  state = {
    open: true,
  };

  componentDidMount() {
    window.addEventListener("resize", this.checkWidth);
  };

  checkWidth = () => {
    if (window.innerWidth <= 800) {
      this.setState({ open: false });
    }
  };

    handleDrawer = () => {
      if (this.state.open === false) {
        this.setState({ open: true });
      } else if (this.state.open === true) {
        this.setState({ open: false });
      }
    };

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
              { /* <Route exact path="/" component={HomeView} /> */ }
              <Route exact path="/" component={Users} />
              { /* <Route exact path="/home" component={HomeView} /> */ }
              <Route exact path="/home" component={Users} />
              <Route path="/users" component={Users} />
              <Route exact path="/users/:id" component={UserDetailsView} />
              <Route render={ () => <h1>Page not found</h1>} />
            </Switch>

          </div>
        </Router>
      );
    }
  }


Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
