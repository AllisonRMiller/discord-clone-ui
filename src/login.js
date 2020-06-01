import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// Styling still needed: rounded corners, drop shadow, long button. Found wobbly bezier code but will not be implementing it at this time.

const LoginForm = (props) => {
    return (
        <div id="login-container">
            <Container>
                <Row className="mt-5">
                    <Col md={{ size: 6, offset: 3 }}>
                        <Form id="login-form" className="mt-5 p-4 bg-dark text-light">
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" id="Email" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">Password</Label>
                                <Input type="password" name="password" id="Password" placeholder="password placeholder" />
                            </FormGroup>
                            <Button>Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LoginForm;