import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// Could I do this as conditional rendering on one page under login? Have if path = /signup render username

const SignupForm = (props) => {
    return (
        <div>
            <Container id="signup-container">
                <Row className="mt-5">
                    <Col md={{ size: 6, offset: 3 }}>
                        <Form className="mt-5 p-4 bg-dark text-light">
                            <FormGroup>
                                <Label for="username">User Name</Label>
                                <Input type="username" name="username" id="username" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" id="Email" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">Password</Label>
                                <Input type="password" name="password" id="Password" placeholder="password placeholder" />
                            </FormGroup>
                            <Button>Sign Up</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignupForm;