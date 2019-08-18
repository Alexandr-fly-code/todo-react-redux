import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

import Items from './components/Items';
import Comments from './components/Comments'

import './App.css';


const styles = {
  root: {
    background: '#fff',
    borderRadius: 3,
    maxWidth: '1280px',
    margin: 'auto',
    padding: '20px',
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },

  containerLeft: {
    backgroundColor: '#4d6680',
    maxWidth: '21%',
    height: '100vh',
  },

};

function App(props) {
  const {classes} = props;


  return (
    <Box component="div" className={classes.root}>
      <Container className={classes.containerLeft}>
        <Typography component="div"/>
      </Container>

      <Items/>
      <Comments/>
    </Box>
  );
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App);



