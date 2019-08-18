import { ACTIONS_TYPES } from '../actions/actionsTypes';

const initialState = {};

export const textForComments = (state = initialState, actions) => {
  switch(actions.type){

      case ACTIONS_TYPES.getTextComment:
          return actions.text;
    default: 
      return state;
  }
}

export const idForComments = (state = initialState, actions) => {
  switch(actions.type){
    case ACTIONS_TYPES.getIdItem:
      return actions.id
    default: 
      return state;
  }
}

export const currentTaskId = (state = null, actions) => {
  switch(actions.type){
    case ACTIONS_TYPES.selectTaskId:
     return Number(actions.id)
    default: 
      return state;
  }
}


