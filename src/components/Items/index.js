import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { addItem, getAndSetInputValue } from '../../redux/actions/actions';

import ListItems from './ListItems';

import './Items.css';

const useStyles = makeStyles(theme => ({
  items: {
    maxWidth: '37.4%',
    minHeight: "526px",
    marginLeft: '2.5%',
    marginRight: '1.3%',
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    padding: "20px 12px 0 30px"
  },

  title: {
    fontSize: "24px"
  },

  button: {
    margin: theme.spacing(1),
    paddingBottom: "4px",
    lineHeight: "20px",
    width: "28.2%",
    backgroundColor: "#4DA6FF",
    cursor: "pointer"
  },

  listItems: {
    maxWidth: "88.2%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    flexWrap: "wrap"
  },

  itemText: {
    width: "67.5%",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },

  itemButton: {
    width: "32.2%",
    paddingBottom: "4px",
    lineHeight: "20px",
    backgroundColor: "#4DA6FF",
    cursor: "pointer",

  }
}));

function Items(props) {

  const handleInputAndAddItem = (e) => {
    e.preventDefault();
    props.addItem(props.text)
  }

  const classes = useStyles();
  return (
    <Container className={classes.items}>
      <Typography component="h1" className={classes.title}>Items</Typography>

      <form onSubmit={(e) => handleInputAndAddItem(e)}>
        <Box display="flex" alignItems="flex-end" flexWrap="wrap">
          <TextField
              id="outlined-with-placeholder"
              placeholder="Type name here..."
              margin="normal"
              variant="outlined"
              className="textField"
              onChange={props.getAndSetInputValue}
          />
          <Button 
            variant="contained" 
            type="submit" 
            color="primary" 
            className={classes.button}
          >
            Add new
          </Button>
        </Box>
      </form>

      <ListItems/>
    </Container>
  );
}

const MSTP = state => ({
  text: state.text
})

const MDTP = dispatch => ({
  addItem: (text) => dispatch(addItem(text)),
  getAndSetInputValue: (e) => dispatch(getAndSetInputValue(e.target.value))
})

Items.propTypes = {
  text: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
  getAndSetInputValue: PropTypes.func.isRequired,
  classes: PropTypes.object
}

export default connect(MSTP, MDTP)(Items);
