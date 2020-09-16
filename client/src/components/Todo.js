import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, Row, Col, Input } from 'reactstrap';
import {
    Card, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { ListGroup } from 'reactstrap';
import { getTodos, deleteTodo, addTodo, toggleTodoCompleted } from './../store/actions/todoAction'



const Todo = () => {
    const [todo, setTodo] = useState("")

    //state
    const todos = useSelector(state => state.todos.todos);


    //actions
    const dispatch = useDispatch();
    const getAllTodos = () => dispatch(getTodos());
    const removeTodo = (id) => dispatch(deleteTodo(id));
    const addNewTodo = (value) => dispatch(addTodo(value))
    const toggleTodo = (id) => dispatch(toggleTodoCompleted(id))



    //add new todo
    const handleAddTodo = () => {
        const newTodo = {
            title: todo
        }
        addNewTodo(newTodo)
        setTodo("")
    }

    const handleDeleteTodo = (id) => {
        removeTodo(id)
    }

    const handleToggleTodo = (id) => {
        toggleTodo(id)
    }



    //load todos on component mount
    useEffect(() => {
        getAllTodos()
    }, [])


    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding ml-5" >
                <Container>
                    <Row>
                        <Col xs="12">
                            <Card className="px-3">
                                <CardBody>
                                    <CardTitle>Awesome Todo list</CardTitle>
                                    <div className="add-items d-flex">
                                        <Input
                                            type="text"
                                            value={todo}
                                            onChange={(e) => setTodo(e.target.value)}
                                            className="form-control todo-list-input"
                                            placeholder="What do you need to do today?"
                                        />
                                        <Button
                                            color="primary"
                                            onClick={handleAddTodo}
                                            disabled={todo.trim() === "" ? true : false}
                                        >
                                            Add
                                        </Button>
                                    </div>
                                    <div className="list-wrapper">
                                        <ListGroup>
                                            <TransitionGroup className="todo-list">
                                                {todos && todos.map(({ title, _id, completed }) => (
                                                    <CSSTransition key={_id} timeout={500} classNames="fade">
                                                        <li className={completed ? "completed" : ""}>
                                                            <div className="form-check"> <label className="form-check-label"> <input onChange={() => handleToggleTodo(_id)} className="checkbox" type="checkbox" checked={!!completed} /> {title} <i className="input-helper"></i></label> </div> <i onClick={() => handleDeleteTodo(_id)} className="remove mdi mdi-close-circle-outline"></i>
                                                        </li>
                                                    </CSSTransition>
                                                ))}
                                            </TransitionGroup>
                                        </ListGroup>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Todo