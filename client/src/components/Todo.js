import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    Row, Col, Input, Card, CardBody,
    CardTitle, Button, ListGroup
} from 'reactstrap';
import TodoList from './TodoList'
import { getTodos, deleteTodo, addTodo, toggleTodo } from './../store/actions/todoActions'



const Todo = () => {
    const [todo, setTodo] = useState("")

    //redux state & actions
    const { isAuthenticated } = useSelector(state => state.auth)
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();


    //add new todo
    const handleAddTodo = () => {
        const newTodo = {
            title: todo
        }
        dispatch(addTodo(newTodo))
        setTodo("")
    }

    //remove todo
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    //toggle completed todo
    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id))
    }


    //load all todos on component mount
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getTodos())
        }

    }, [dispatch, isAuthenticated])


    return (
        <Row>
            <Col sm="12" md="10 offset-1">
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
                            <ListGroup className="list-wrapper">
                                <TodoList
                                    todos={todos}
                                    handleDeleteTodo={handleDeleteTodo}
                                    handleToggleTodo={handleToggleTodo}
                                />
                            </ListGroup>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Todo