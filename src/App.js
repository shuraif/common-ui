import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import AppDrawer from './screens/AppDrawer';

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import RegistrationForm from './screens/SignUp';
import SignIn from './screens/SignIn';
import SendMail from './screens/sendmail/SendMail';
import SendMailHome from './screens/sendmail/SendMailHome';
import Settings from './screens/Settings';
import Profile from './screens/Profile';
import History from './screens/history/History';


import { useSelector, useDispatch } from 'react-redux';
import { Home } from '@mui/icons-material';
import {
  loginSuccess,
  isLoginStatus,
} from './redux/counterSlice';

import { createTheme, ThemeProvider } from '@mui/material/styles';
const App = () => {

  const isLogin = useSelector(isLoginStatus);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#123E91', // Custom primary color
      },
      secondary: {
        main: '#ff4081', // Custom secondary color
      },
      background: {
        default: '#555555',
        paper: '#f5f5f5',
      }
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 16,
      fontWeightRegular: 400,
      fontWeightBold: 700,
    },
    globals: {
      '@global': {
        body: {
          backgroundColor: '#f5f5f5',
        },
      },
    }
    // Add more customizations as needed
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>

        {
          isLogin ? <>
            <AppDrawer />
            <Routes>
              <Route index element={<SendMailHome />} />
              <Route path="/sendmail" element={<SendMailHome />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/history" element={<History/>} />
            </Routes>
          </> :
            <>
              <Routes>
                <Route index element={<SignIn />} />
                <Route path='/signup' element={<RegistrationForm />} />
                <Route path='/login' element={<SignIn />} />
              </Routes>
            </>
        }
      </Router>
    </ThemeProvider>
  )
}


export default App;
