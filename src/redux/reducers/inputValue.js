import { ACTIONS_TYPES } from '../actions/actionsTypes';

const initialState = '';

const reducer = (state = initialState, actions) => {
  switch(actions.type){
    case ACTIONS_TYPES.inputValue:
      return actions.value
    default: 
      return state;
  }
}



export default reducer;