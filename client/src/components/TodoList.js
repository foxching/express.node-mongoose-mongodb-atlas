import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const TodoList = ({todos, handleDeleteTodo, handleToggleTodo}) => {
    return (
        <TransitionGroup className="todo-list">
            {todos && todos.map(({ _id, title, completed }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                    <li className={completed ? "completed" : ""}>
                        <div className="form-check"> <label className="form-check-label"> <input onChange={() => handleToggleTodo(_id)} className="checkbox" type="checkbox" checked={!!completed} /> {title} <i className="input-helper"></i></label> </div> <i onClick={() => handleDeleteTodo(_id)} className="remove mdi mdi-close-circle-outline"></i>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}

export default TodoList