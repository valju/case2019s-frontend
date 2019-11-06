import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export const mainListItems = (
    <div>
      <ListItemLink href="/home">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemLink>
      <ListItemLink href="/users">
        <ListItemIcon>
        <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
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
