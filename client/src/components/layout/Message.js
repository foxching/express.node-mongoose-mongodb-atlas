import React, { Fragment } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const Message = (props) => {
    return (
        <Fragment>
            <Row>
                <Col sm="12" >
                    <Jumbotron>
                        <Container>
                            <h1 className="display-3">Organize it All!</h1>
                            <p className="lead">You dont have to remember everything. We do it for you</p>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Message;