import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />;
}

export const mainListItems = (
  <div>
    <ListItemLink to='/home'>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" secondary='School'/>
    </ListItemLink>

    <ListItemLink to='/areas'>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Areas" />
    </ListItemLink>
    <ListItemLink to='/eventtypes'>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="EventTypes" />
    </ListItemLink>
    <ListItemLink to='/locations'>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Locations" />
    </ListItemLink>
    <ListItemLink to='/locationtypes'>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Location types" />
    </ListItemLink>
    <ListItemLink to='/urgencytypes'>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="UrgencyTypes" />
    </ListItemLink>
    <ListItemLink to='/users'>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemLink>

    <ListItemLink to='/areausers'>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="AreaUsers" />
    </ListItemLink>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>
  </div>
);

//style={{ textDecoration: 'none', color: 'black' }}
