import * as React from 'react';

import { NavLink } from 'react-router-dom';

import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
} from '@mui/material';

import { Home, Notes } from '@mui/icons-material';

export default function AuthNav() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <List
      component="nav"
      aria-label="main mailbox folders"
      sx={{ display: 'flex' }}
    >
      <Box sx={{ width: 'fit-content' }}>
        <NavLink
          to={'/'}
          variant="h6"
          component="div"
          style={{ textDecoration: 'none' }}
        >
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <Home sx={{ width: '32px', height: '32px', color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ color: 'white' }} />
          </ListItemButton>
        </NavLink>
      </Box>

      <Box sx={{ width: 'fit-content' }}>
        <NavLink
          to={'/notes'}
          variant="h6"
          component="div"
          style={{ textDecoration: 'none' }}
        >
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <Notes sx={{ width: '32px', height: '32px', color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Notes" sx={{ color: 'white' }} />
          </ListItemButton>
        </NavLink>
      </Box>
    </List>
  );
}
