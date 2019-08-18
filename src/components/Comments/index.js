import React from 'react';
import { connect } from 'react-redux'
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { getTextForComments, addComment,  } from '../../redux/actions/actions';

import ListComments from './ListComments';

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



function Comments({
    getTextForComments, 
    addComment, 
    textForComments, 
    idForComments, 
    items,
    currentTaskId
  }) {
  const classes = useStyles();

  const handleTextArea = (e) => {
    e.preventDefault();
    addComment(idForComments, textForComments)
  }

  return (
      <Container className={classes.comments}>
        <Typography component="h1" className={classes.title}>Comments</Typography>
      
        {items.map(item => 
          <Switch key={item.id}>
            {item.id === currentTaskId ? 
              <Route 
                exact path={`/${item.id}`} 
                render={(props) => <ListComments comment={item.comment}/>}
              />
            : null}
          </Switch>
        )}


      <form onSubmit={handleTextArea}>
        <Box className={classes.containerUserComments}>
          <Typography 
            component="div" 
            className={classes.userPhoto}/>
          <TextareaAutosize 
            className={classes.inputComment} 
            aria-label="minimum height" 
            rows={3} 
            placeholder="Minimum 3 rows" 
            onChange={(e) => getTextForComments(e.target.value)}
          />
        </Box>

        <Box display="flex">
          <Button 
            variant="contained" 
            color="primary" 
            type="submit" 
            className={classes.addButtonComment}
          >
            Add new
          </Button>
        </Box>
      </form>
      </Container>
  )
}
const MSTP = state => ({
  textForComments: state.textForComments,
  idForComments: state.idForComments,
  items: state.items,
  currentTaskId: state.currentTaskId,
  lang: state.i18nState.lang
})

const MDTP = dispatch => ({
  getTextForComments: (text) => dispatch(getTextForComments(text)),
  addComment: (id, text) => dispatch(addComment(id, text)),
})

Comments.propTypes = {
  textForComments: PropTypes.any.isRequired,
  idForComments: PropTypes.any.isRequired,
  items: PropTypes.array.isRequired,
  currentTaskId: PropTypes.any,
  lang: PropTypes.string.isRequired,
  getTextForComments: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired
}

export default connect(MSTP, MDTP)(Comments);