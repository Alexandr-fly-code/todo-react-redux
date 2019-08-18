import { ACTIONS_TYPES } from '../actions/actionsTypes';

const initialState = [];

const addComment = (state = initialState, actions) => {
  switch(actions.type){
    case ACTIONS_TYPES.addComment:
      return [...state, actions.payload]

    default: 
      return state;
  }
}



export default addComment;