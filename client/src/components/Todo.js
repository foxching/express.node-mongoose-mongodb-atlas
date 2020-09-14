import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { getTodos, deleteTodo, addTodo } from './../store/actions/todoAction'



const Todo = () => {
    const [todo, setTodo] = useState("")

    //state
    const todos = useSelector(state => state.todos.todos);


    //actions
    const dispatch = useDispatch();
    const getAllTodos = () => dispatch(getTodos());
    const removeTodo = (id) => dispatch(deleteTodo(id));
    const addNewTodo = (value) => dispatch(addTodo(value))



    //add new todo
    const handleAddTodo = () => {
        const newTodo = {
            id:uuid(),
            title:todo
        }
        addNewTodo(newTodo)
        setTodo("")
    }
    
    const handleDeleteTodo = (id) => {
        removeTodo(id)
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
                                        >
                                            Add
                                        </Button>
                                    </div>
                                    <div className="list-wrapper">
                                        <ListGroup>
                                            <TransitionGroup className="todo-list">
                                                {todos && todos.map(todo => (
                                                    <CSSTransition key={todo.id} timeout={500} classNames="fade">
                                                        <li>
                                                            <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" /> {todo.title} <i className="input-helper"></i></label> </div> <i onClick={() => handleDeleteTodo(todo.id)} className="remove mdi mdi-close-circle-outline"></i>
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