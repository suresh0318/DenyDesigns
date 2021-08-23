import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';
import {Link} from "react-router-dom"
import { useHistory } from 'react-router';

const Login = () => {
  let history = useHistory();
  function onClickButton (event) {
  event.preventDefault();
  history.push("/");
}
  return (
    <div>
      <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" onClick={onClickButton}>
    Submit
  </Button>

   <Link to="/register"><Button variant="primary" className="m-1">
    Register
  </Button>
  </Link>
</Form>
    </div>
  )
}

export default Login
