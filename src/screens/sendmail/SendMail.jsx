import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grow from '@mui/material/Grow';


const SendMail = () => {

  const [toEmail, setToEmail] = React.useState('');
  const [validMinutes, setValidMinutes] = React.useState(5);
  const [userName, setUserName] = React.useState('');


  const sendMail = () => {
    console.log(toEmail)
    console.log(validMinutes)
    console.log(userName)

    let request = {
      "toEmail": toEmail,
      "validMinutes": validMinutes,
      "userName": userName
    }
    axios.post('http://localhost:8080/activation/sendmail', request)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  return (
    <div>

      <Grow
        in={true}
        style={{ transformOrigin: '0 0 0' }}
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
          <Grid container spacing={2} style={{ justifyContent: 'center', margin: 30, width: 800 }}>

            <Grid xs={4} style={{ textAlign: 'left' }}>
              To address
            </Grid>
            <Grid xs={8} style={{ textAlign: 'left' }}>
              <TextField style={{ width: 400 }} id="outlined-basic" label="emailId" onChange={(event) => setToEmail(event.target.value)} />
            </Grid>

            <Grid xs={4} style={{ textAlign: 'left' }}>
              Validity
            </Grid>
            <Grid xs={8} style={{ textAlign: 'left' }}>
              <TextField style={{ width: 400 }} id="outlined-basic" label="minutes" onChange={(event) => setValidMinutes(event.target.value)} />
            </Grid>

            <Grid xs={4} style={{ textAlign: 'left' }}>
              User name
            </Grid>
            <Grid xs={8} style={{ textAlign: 'left' }}>
              <TextField style={{ width: 400 }} id="outlined-basic" label="Customer name" onChange={(event) => setUserName(event.target.value)} />
            </Grid>


            <Grid xs={7} style={{ borderWidth: 0 }}>
            </Grid>
            <Grid style={{}} xs={3}>
              <Button style={{ width: 130, height: 50 }} variant="outlined" onClick={() => sendMail()}>Send</Button>
            </Grid>
          </Grid>
        </Box>
      </Grow>
    </div>
  )
}

export default SendMail