import axios from 'axios'
import { GET_TODOS, DELETE_TODO, ADD_TODO, TOGGLE_TODO, CLEAR_TODOS, TODO_LOADING } from './types';
import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'

export const getTodos = () => (dispatch, getState) => {
    dispatch(setLoading())
    axios
        .get('/api/todos', tokenConfig(getState))
        .then(res => dispatch({
            type: GET_TODOS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deleteTodo = (id) => (dispatch, getState) => {
    axios.delete(`/api/todos/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_TODO,
                payload: id
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const toggleTodo = (id) => (dispatch, getState) => {
    axios.put(`/api/todos/${id}`, null, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: TOGGLE_TODO,
                payload: id
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}


export const addTodo = (todo) => (dispatch, getState) => {
    axios
        .post('/api/todos', todo, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_TODO,
                payload: res.data
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const clearTodos = () => {
    return {
        type: CLEAR_TODOS
    }
}


export const setLoading = () => {
    return {
        type: TODO_LOADING
    }
}