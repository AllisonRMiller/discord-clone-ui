import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import { Row, Col, Jumbotron, Button, Container } from 'reactstrap';

const Landing = (props) => {
    return (
        <div>
            <Row>
                <Col>
                    <Jumbotron id="landing-jumbo" className="text-center m-0 justify-content-center bg-dark text-light">
                        <Container fluid>
                            <h1 className="display-3">Accord</h1>
                            <p className="lead">An incomplete Discord clone.</p>
                            <hr className="my-2" />
                            <p>Get started now!</p>
                            <p className="lead">
                                <Button className="mr-3" 
                                tag={Link} to="/signup" 
                                color="primary">Sign Up</Button>
                                <Button 
                                tag={Link} to="/login" 
                                color="primary" 
                                // onClick={()=>history.push("/login")}
                                >Log In</Button>
                            </p>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>
        </div>
    );
};

export default Landing;