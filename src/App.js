import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import AppDrawer from './screens/AppDrawer';

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import RegistrationForm from './screens/SignUp';
import SignIn from './screens/SignIn';
import SendMail from './screens/SendMail';
import Settings from './screens/Settings';
import Profile from './screens/Profile';

import { useSelector, useDispatch } from 'react-redux';
import { Home } from '@mui/icons-material';
import {
  loginSuccess,
  isLoginStatus,
} from './redux/counterSlice';

const App = () => {

  const isLogin = useSelector(isLoginStatus);

  const [parentState, setParentState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleParent = (anchor, open) => (event) => {
    console.log('Parent toggle called')
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setParentState({ ...parentState, [anchor]: open });
  };




  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!isLogin ? <AppDrawer toggleParent={toggleParent} parentState={parentState} /> : <Navigate to="/login" />}
        />
        <Route path='/signup' element={<RegistrationForm />} />
        <Route path='/login' element={<SignIn />} />
      </Routes>

    </Router>
  )
}


export default App;
