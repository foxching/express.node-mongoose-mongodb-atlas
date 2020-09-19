import { GET_TODOS, DELETE_TODO, ADD_TODO, TOGGLE_TODO, CLEAR_TODOS, TODO_LOADING } from '../actions/types'


const initialState = {
  todos: [],
  loading: false
}


const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(({ _id }) => _id !== action.payload)
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo._id === action.payload) {
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    case CLEAR_TODOS:
      return {
        ...state,
        todos: []
      }
    default:
      return state
  }
}

export default TodosReducer;