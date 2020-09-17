import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { register } from '../../store/actions/authActions'
import { clearErrors } from '../../store/actions/errorActions'

const RegisterModal = () => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);

    //redux state 
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const error = useSelector(state => state.error)

    //redux actions
    const dispatch = useDispatch();

    const handleToggle = useCallback(() => {
        // Clear errors
        dispatch(clearErrors())
        setModal(!modal);
    }, [dispatch, modal]);

    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);


    const handleOnSubmit = (e) => {
        e.preventDefault();

        // Create user object
        const user = {
            name,
            email,
            password
        };

        // Attempt to register
        dispatch(register(user))
    }

    useEffect(() => {
        // Check for register error
        if (error.id === 'REGISTER_FAIL') {
            setMsg(error.msg.msg);
        } else {
            setMsg(null);
        }

        // If authenticated, close modal
        if (modal) {
            if (isAuthenticated) {
                handleToggle();
            }
        }
        
    }, [error, handleToggle, isAuthenticated, modal]);


    return (
        <div>
            <NavLink onClick={handleToggle} href="#">
                Register
            </NavLink>

            <Modal isOpen={modal} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>Register</ModalHeader>
                <ModalBody>
                    {msg ? <Alert color="danger">{msg}</Alert> : null}
                    <Form onSubmit={handleOnSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                className="mb-3"
                                onChange={handleChangeName}
                            />

                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="mb-3"
                                onChange={handleChangeEmail}
                            />

                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="mb-3"
                                onChange={handleChangePassword}
                            />
                            <Button color="dark" style={{ marginTop: '2rem' }} block>
                                Register
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default RegisterModal