import { ACTIONS_TYPES } from '../actions/actionsTypes';

const initialState = [];

const items = (state = initialState, actions) => {
  switch(actions.type){
    case ACTIONS_TYPES.addItem:
      return [...state, actions.payload]
    
    case ACTIONS_TYPES.addComment:
       return state = state.map(el => el.id === actions.payload.id[0] ? {...el, comment: actions.payload.text} : el)
      
    case ACTIONS_TYPES.deleteItems:
      return state.filter(item => item.id !== Number(actions.id))

    default: 
      return state;
  }
}



export default items;