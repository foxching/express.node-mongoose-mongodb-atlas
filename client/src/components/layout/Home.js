import React from 'react';
import { useSelector } from "react-redux";
import { Container } from 'reactstrap';
import Todo from '../Todo'
import Message from './Message'


const Home = () => {
    const { isAuthenticated, isLoading } = useSelector(state => state.auth)
    return (
        <div className="padding ml-5" >
            <Container>
                {isLoading ? <p>Please wait...</p> : isAuthenticated ? <Todo /> : <Message />}
            </Container>
        </div>
    )
}

export default Home