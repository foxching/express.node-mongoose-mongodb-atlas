import { GET_TODOS } from './types';

export const getTodos = () => dispatch => {
    return {
        type: GET_TODOS
    }
}