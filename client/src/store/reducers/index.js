import { combineReducers } from 'redux';
import todosReducer from './todoReducer';
import ErrorsReducer from './errorReducer';
import AuthReducer from './authReducer';

export default combineReducers({
    todos: todosReducer,
    auth: AuthReducer,
    error: ErrorsReducer
})