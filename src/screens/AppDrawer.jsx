import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import FolderDelete from '@mui/icons-material/MoveToInbox';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Home from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import {
  logout,
  isLoginStatus,
} from '../redux/counterSlice';
import SendMail from './SendMail';
import Settings from './Settings';
import Profile from './Profile';
const AppDrawer = (props) => {

  const isLogin = useSelector(isLoginStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [drawerState, setDrawerState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => {
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const handleSelection = (text) => {

    toggleDrawer('left', false)
    if (text == 'Send Mail') {
      navigate('/sendmail')
    } else if (text == 'Settings') {
      navigate('/settings')
    } else if (text == 'Profile') {
      navigate('/profile')
    }

  }

  const listItems = [{ text: 'Send Mail', icon: 'send' }, { text: 'Settings', icon: 'settings' }, { text: 'Profile', icon: 'profile' }]

  const list = (anchor) => (
    <Box
      //style={{backgroundColor:'red'}}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      //onClick={props.toggleParent(anchor, false)}
      onKeyDown={() => toggleDrawer('left', false)}
    >
      <List>
        {listItems.map((item, index) => (
          <ListItem key={item.text} disablePadding onClick={() => handleSelection(item.text)}>
            <ListItemButton  >
              <ListItemIcon>
                {item.icon === 'send' ? <SendIcon /> : item.icon == 'settings' ? <SettingsIcon /> : <AccountCircleIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={() => toggleDrawer('left', true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              The App
            </Typography>

            <Button
              onClick={() => {
                dispatch(logout())
                navigate('/');
              }
              }
              color="inherit">LogOut  <LogoutIcon style={{ paddingLeft: 10 }} /></Button>

          </Toolbar>
        </AppBar>
      </Box>
      <React.Fragment key={'left'}>

        <Drawer
          anchor={'left'}
          open={drawerState['left']}
          onClose={() => toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>


      </React.Fragment>

    </div>
  );
}

export default AppDrawer;