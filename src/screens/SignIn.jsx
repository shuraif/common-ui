import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  login,
  isLoginStatus,
} from '../redux/counterSlice';
import Grow from '@mui/material/Grow';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

  const isLogin = useSelector(isLoginStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passsword, setPassword] = React.useState('')
  const [checked, setChecked] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('')


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = []
    const request = {
      email: userName,
      password: passsword
    }

    axios.post('http://localhost:8090/api/general/logincust', request)
      .then((res) => {
        console.log(res.data)
        if (res.data.customerGuid != null) {
          console.log('login success')
          dispatch(login())
          //navigate('/');
        } else {
          console.log('login failed')
          setErrorMessage('Login failed')
        }


      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };



  const handleUserNameChange = (event) => {
    const newValue = event.target.value;
    setErrorMessage('')
    setUserName(newValue);
    console.log(newValue);
  };

  const handleUserPasswordChange = (event) => {
    const newValue = event.target.value;
    setErrorMessage('')
    setPassword(newValue);
    console.log(newValue);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grow
          in={true}
          style={{ transformOrigin: '0 100 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                value={userName}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleUserNameChange}
              />
              <TextField
                value={passsword}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleUserPasswordChange}
              />
              {/* <FormControlLabel
              fullWidth
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <br />
              <div style={{ color: 'red', display: 'flex', justifyContent: 'center' }}>
                {errorMessage}
              </div>



              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}

                onClick={handleSubmit}

              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup"> Don't have an account? Sign Up</Link>

                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grow>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}