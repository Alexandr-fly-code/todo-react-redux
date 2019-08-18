import { ACTIONS_TYPES } from './actionsTypes';

export const addItem = (text, comment) => ({
    type: ACTIONS_TYPES.addItem,
    payload: {
      text,
      id: Date.now(),
      comment: ''
    }
})

export const getIdItem = id => ({
  type: ACTIONS_TYPES.getIdItem,
  id
})

export const getTextForComments = text => ({
  type: ACTIONS_TYPES.getTextComment,
  text
})

export const addComment = (id, text) => ({
  type: ACTIONS_TYPES.addComment,
  payload: {
    id,
    text
  }
})

export const getAndSetInputValue = value => ({
  type: ACTIONS_TYPES.inputValue,
  value,
})

export const deleteItem = id => ({
  type: ACTIONS_TYPES.deleteItems,
  id
})

export const selectTaskId = id => ({
  type: ACTIONS_TYPES.selectTaskId,
  id
})
