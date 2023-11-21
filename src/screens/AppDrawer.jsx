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

import { Home, } from '@mui/icons-material';


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


  const handleSelection = (text) => {
    console.log(JSON.stringify(text))
    props.toggleParent('left', false)
    if (text == 'SendMail') {
      navigate('/sendmail')
    } else if (text == 'settings') {
      navigate('/settings')
    } else if (text == 'profile') {
      navigate('/profile')
    }

  }


  const list = (anchor) => (
    <Box
      //style={{backgroundColor:'red'}}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      //onClick={props.toggleParent(anchor, false)}
      onKeyDown={props.toggleParent('left', false)}
    >
      <List>
        {['SendMail', 'settings', 'profile'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={() => handleSelection(text)}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Home /> : <FolderDelete />}
              </ListItemIcon>
              <ListItemText primary={text} />
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
            <IconButton onClick={props.toggleParent('left', true)}
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
              color="inherit">LogOut</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <React.Fragment key={'left'}>

        <Drawer
          anchor={'left'}
          open={props.parentState['left']}
          onClose={props.toggleParent('left', false)}
        >
          {list('left')}
        </Drawer>

        <Routes>
          <Route path="/" element={<Settings />} />
          <Route path="/sendmail" element={<SendMail />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
      </React.Fragment>

    </div>
  );
}

export default AppDrawer;