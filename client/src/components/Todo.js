import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { v4 as uuid } from 'uuid';


const Todo = () => {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([
        { id: uuid(), title: "Eat breakfast" },
        { id: uuid(), title: "Brush teeth" },
    ])

    const handleAddTodo = () => {
        setTodos([...todos, { id: uuid(), title: todo }]);
        setTodo("")
    };

    const handleDeleteTodo = (id) => {
        const tempTodos = todos.filter(todo => todo.id !== id);
        setTodos(tempTodos);
    };


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
                                        <Input type="text" value={todo} className="form-control todo-list-input" placeholder="What do you need to do today?" onChange={(e) => setTodo(e.target.value)} /> <Button color="primary" onClick={handleAddTodo}
                                        >Add</Button>
                                    </div>
                                    <div className="list-wrapper">
                                        <ListGroup>
                                            <TransitionGroup className="todo-list">
                                                {todos.map(todo => (
                                                    <CSSTransition key={todo.id} timeout={500} classNames="fade">
                                                        <li key={todo.id}>
                                                            <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" /> {todo.title} <i class="input-helper"></i></label> </div> <i onClick={() => handleDeleteTodo(todo.id)} class="remove mdi mdi-close-circle-outline"></i>
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