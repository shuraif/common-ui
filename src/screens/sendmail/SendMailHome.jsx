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
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grow from '@mui/material/Grow';


function SendMailHome() {

    const cardDetails = [
        {
            heading:'Card 1',
            subHeading:'Card one',
            body:'Card one.'
        },
        {
            heading:'Card 2',
            subHeading:'Card two',
            body:'Card two.'
        },
        ,
        {
            heading:'Card 3',
            subHeading:'Card three',
            body:'Card three.'
        } ,
        {
            heading:'Card 3',
            subHeading:'Card three',
            body:'Card three.'
        }
    ]

    const CardData = ({ heading, subHeading, body }) => (
      
          <React.Fragment>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {heading}
              </Typography>
              <Typography variant="h5" component="div">
                {subHeading}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {body}
              </Typography>
              <Typography variant="body2">{body}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </React.Fragment>
       
      );

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <Grow
        in={true}
        style={{ transformOrigin: '50 0 0' }}
        {...(true ? { timeout: 1000 } : {})}
      >
        <Box
            sx={{
                //marginTop: 18,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Grid container spacing={2} style={{ justifyContent: 'center', margin: 30, width: 1000 }}>
                {
                    cardDetails.map((cardItem,index)=>(
                        <Grid xs={6} style={{ padding: 20 }}>
                        <Card variant="outlined"> <CardData key={index} {...cardItem}  variant="outlined"/> </Card> 
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
        </Grow>
    )
}

export default SendMailHome