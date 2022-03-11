import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useButton } from '@mui/base/ButtonUnstyled';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import axios from "axios";
//import { setToken } from "./Auth";
import  Login from '../../httpRequest/';

 //Login({username: username,password: password}) ? navigate("/dashboard"): navigate("/"); }

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomButtonRoot = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  width: 100%;

  &:hover {
    background-color: ${blue[600]};
  }

  &.active {
    background-color: ${blue[700]};
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
  const { children } = props;
  const { active, disabled, focusVisible, getRootProps } = useButton({
    ...props,
    ref,
    component: CustomButtonRoot,
  });

  const classes = {
    active,
    disabled,
    focusVisible,
  };

  return (
    <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
      {children}
    </CustomButtonRoot>
  );
});

CustomButton.propTypes = {
  children: PropTypes.node,
};

export default function SignIn() {
    const navigate  = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

     const login = () => {
        Login({username: username, password: password}).then(data => {
            if (data.token) {
                console.log(data.token);
                navigate("/dashboard");
            }
            if (data.error){
                console.log(data.error);
            }
    })
    .catch(err => console.log(err))

       // navigate("/profile");
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>

        <Grid item  xs={12} sm={6} md={6}>
          <Paper elevation={0} >
          <Grid container justify="center">
          <Grid item>
            Suraj
          </Grid>
          </Grid>
          </Paper>
        </Grid>

       <Grid item  xs={12} sm={6} md={6}>
          <Paper elevation={3}
          sx={{
        p: 2,
        margin: 'auto',
        marginTop:10,
        maxWidth: 400,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}>
           <Grid container direction="column" justify="center" spacing={5}>
           <Grid item >
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Grid item >
                   <Avatar alt="Logo" src="/static/images/avatar.jpg"  sx={{ width: 56, height: 56}}>Logo</Avatar>
               </Grid>
            <Grid item >
            <Typography variant="subtitle1" gutterBottom component="div">Login to SmartBook</Typography>
            </Grid>
           </Grid>
           </Grid>

           <Grid item >
            <TextField
                required
                variant="outlined"
                id="username"
                label="Username"
                value={username}
                 size="small"
                fullWidth
                onChange={e => setUsername(e.target.value)}
            />
        </Grid>
         <Grid item >
            <TextField
                required
                variant="outlined"
                id="password"
                label="Password"
                value={password}
                 size="small"
                fullWidth
                type="password"
                onChange={e => setPassword(e.target.value)}
            />
        </Grid>
          <Grid item >
              <CustomButton fullWidth onClick={username==="" && password==="" ? false: login}>Submit
              </CustomButton>
          </Grid>
          </Grid>
          </Paper>
        </Grid>



      </Grid>
    </Box>
  );
}