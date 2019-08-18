import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { i18nState } from "redux-i18n"

import text from './inputValue';
import items from './Items';
import { textForComments, idForComments, currentTaskId } from './paramsForComment';
import addComment from './addComment';

import { routerReducer } from 'react-router-redux';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['items', 'addComment']
}

const rootReducer = combineReducers({
    text,
    items,
    textForComments,
    idForComments,
    addComment,
    routing: routerReducer,
    currentTaskId,
    i18nState
})

export default persistReducer(persistConfig, rootReducer)