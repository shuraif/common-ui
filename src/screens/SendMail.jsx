import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';
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



const SendMail=()=> {

const [toEmail,setToEmail] = React.useState('');
const [validMinutes,setValidMinutes] = React.useState(5);
const [userName,setUserName] = React.useState('');


const sendMail=()=>{
    console.log(toEmail)
    console.log(validMinutes)
    console.log(userName)

    let request={
      "toEmail":toEmail,
      "validMinutes":validMinutes,
      "userName":userName
  }
    axios.post('http://localhost:8080/activation/sendmail', request)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }



  return (
    <div>

    
      <Grid container spacing={2} style={{justifyContent:'center',margin:30,width:600}}>

        <Grid xs={4} style={{textAlign:'left'}}>
          To address
        </Grid>
        <Grid xs={8} style={{textAlign:'left'}}>
         <TextField id="outlined-basic" label="emailId" onChange={(event)=>setToEmail(event.target.value)}/>
        </Grid>

        <Grid xs={4} style={{textAlign:'left'}}>
          Validity
        </Grid>
        <Grid xs={8} style={{textAlign:'left'}}>
         <TextField id="outlined-basic" label="minutes" onChange={(event)=>setValidMinutes(event.target.value)}/>
        </Grid>

        <Grid xs={4}style={{textAlign:'left'}}>
          User name
        </Grid>
        <Grid xs={8} style={{textAlign:'left'}}>
         <TextField id="outlined-basic" label="Customer name" onChange={(event)=>setUserName(event.target.value)}/>
        </Grid>


        <Grid xs={6} style={{borderWidth:0}}>
        </Grid>
        <Grid xs={6}>
        <Button style={{}} variant="outlined" onClick={()=>sendMail()}>Send</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default SendMail