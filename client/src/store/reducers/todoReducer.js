import { GET_TODOS, DELETE_TODO, ADD_TODO } from '../actions/types'
import { v4 as uuid } from 'uuid';

const initialState = {
  todos: [
    { id: uuid(), title: "Eat breakfast" },
    { id: uuid(), title: "Brush teeth" },
    { id: uuid(), title: "Code websites" }
  ]
}


const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }
    default:
      return state
  }
}

export default TodosReducer;