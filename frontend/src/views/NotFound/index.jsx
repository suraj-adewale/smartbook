import React, { Component } from 'react';
// Externals
import PropTypes from 'prop-types';

// Material helpers
//import { withStyles } from '@material-ui/core';


// Material components

import {Grid, Typography, styled} from '@mui/material';
import { makeStyles } from '@mui/styles';


// Component styles
const usestyles = makeStyles((theme) =>({
  root: {
   padding: 10,
  },
  content: {
    marginTop: '150px',
    textAlign: 'center'
  },
  image: {
    display: 'inline-block',
    marginTop: '50px',
    maxWidth: '100%',
    width: '554px'
  }
}));

const NotFound = () => {
const  classes = usestyles();

  return (
      <div className={classes.root}>
        <Grid
            container
            justify="center"
            spacing={4}
        >
          <Grid
              item
              lg={6}
              xs={12}
          >
            <div className={classes.content}>
              <Typography variant="h1">
                404: The page you are looking for isn’t here
              </Typography>
              <Typography variant="subtitle2">
                You either tried some shady route or you came here by mistake.
                Whichever it is, try using the navigation
              </Typography>
              <img
                  alt="Under development"
                  className={classes.image}
                  src="../images/logo512.png"
              />
            </div>
          </Grid>
        </Grid>
      </div>


  );



}
export default NotFound;
