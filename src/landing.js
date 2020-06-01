import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Row, Col, Jumbotron, Button, Container, FormGroup, Form, Label, Input, } from 'reactstrap';

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
                                <Form>
                                    <FormGroup>
                                        <Label for="Search">Where</Label>
                                        <Input
                                            type="search"
                                            name="search"
                                            id="exampleSearch"
                                            placeholder="search placeholder"
                                        />
                                    </FormGroup>
                                </Form>
                            </p>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>
        </div>
    );
};

export default Landing;