import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  comments: {
    maxWidth: '34.5%',
    backgroundColor: '#fff',
    minHeight: '100vh',
    padding: "20px 30px 20px 20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },

  title: {
    fontSize: "24px",
    paddingBottom: "15px"
  },

  containerUserComments: {
    display: "flex",
    borderBottom: "2px solid #F2F2F2",
    paddingBottom: "25px",
    marginTop: "15px"
  },

  userPhoto: {
    minWidth: "50px",
    height: "50px",
    backgroundColor: "#FF8A00"
  },

  userText: {
    wordBreak: "break-word",
    marginLeft: "13px"
  },

  inputComment: {
    width: "83%",
    height: "71px !important",
    marginLeft: "13px"
  },

  addButtonComment: {
    margin: "0 0 0 auto",
    padding: "3px 28px",
    backgroundColor: "#4DA6FF",
    cursor: "pointer"
  }
}));



function ListComments({ comment }) {
  const classes = useStyles();


  return (
      <React.Fragment>
        {comment ? 
          <Box className={classes.containerUserComments}>
            <Typography component="div" className={classes.userPhoto}/>
            <Typography component="p" className={classes.userText}>
              {comment}
            </Typography>
          </Box>
        : null}
      </React.Fragment>
  )
}

ListComments.propTypes = {
  comment: PropTypes.any
}

export default ListComments;