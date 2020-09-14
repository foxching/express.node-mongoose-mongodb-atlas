import { GET_TODOS } from '../actions/types'
import { v4 as uuid } from 'uuid';

const initialState = {
  todos: [
    { id: uuid(), title: "Eat breakfast" },
    { id: uuid(), title: "Brush teeth" },
    { id: uuid(), title: "Code websites" }
  ]
}


const TodosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS:
      return {
        ...state
      }
    default:
      return state
  }
}

export default TodosReducer;