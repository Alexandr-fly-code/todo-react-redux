import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import { deleteItem, getIdItem, selectTaskId } from '../../redux/actions/actions';

const useStyles = makeStyles(theme => ({
  listItems: {
    maxWidth: "88.2%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    flexWrap: "wrap",
    padding: "8px",
    borderBottom: "1px solid #F2F2F2"
  },

  itemText: {
    width: "71.1%",
    color: "#000",
    textDecoration: "none",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },

  singleItem: {
    width: "91.2%",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    display: "flex",
    flexWrap: "wrap",
    position: "relative"
  },

  itemButton: {
    width: "26.2%",
    paddingBottom: "4px",
    lineHeight: "25px",
    cursor: "pointer",
    border: "2px solid #FF7892",
    backgroundColor: "#fff",
    color: "#FF7892",
    fontSize: "0.875rem",
    borderRadius: "4px"
  },

  countComments: {
    backgroundColor: "#4DA6FF",
    color: "#fff",
    borderRadius: "10px",
    padding: "3px 6px",
    fontSize: "12px",
    marginLeft: "28px",
    position: "absolute",
    right: "0"
  }
}));


function ListItems(props) {
  const classes = useStyles();
  const { items, deleteItem, getIdItem, selectTaskId } = props;

  const getIdItemForComment = (id) => {    
    getIdItem([id])
  }

  const showCountComments = comment => {
    if(comment){
      return comment.split(" ").length
    } else {
      return 0
    }
  }
  
  return (
    <React.Fragment>
      {items.map(({text, id, comment}) => 
      <React.Fragment key={id}>
        {getIdItemForComment(id)}

        <Box className={classes.listItems}>
          <NavLink to={`/${id}`} activeClassName="items" className={classes.itemText}>
            <Typography 
              component="p" 
              className={classes.singleItem} 
              id={id} 
              onClick={(e) => selectTaskId(e.target.id)}
            >
              {text}
              <span className={classes.countComments}>{showCountComments(comment)}</span>
            </Typography>
          </NavLink>
        
          <button 
            className={classes.itemButton} 
            data-id={id}
            onClick={(event) => deleteItem(event.target.dataset.id)} data-id={id}            
          >
            Delete
          </button>
          <Divider/>
        </Box>
        </React.Fragment>
        
    )}


</React.Fragment>
  )
}

const MSTP = state => ({
  items: state.items,
})

const MDTP = dispatch => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
  getIdItem: (id) => dispatch(getIdItem(id)),
  selectTaskId: (id) => dispatch(selectTaskId(id))
 })

 ListItems.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
  getIdItem: PropTypes.func.isRequired,
  selectTaskId: PropTypes.func,
 }

export default connect(MSTP, MDTP)(ListItems);