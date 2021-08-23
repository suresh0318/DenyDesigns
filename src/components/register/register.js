import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';
import { useHistory } from 'react-router';


const Register = () => {
  let history = useHistory();
  function onClickButton (event) {
  event.preventDefault();
  history.push("/login");
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

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="number" placeholder="Enter Name" />
    
  </Form.Group>

<Form.Group className="mb-3" controlId="formBasicMobile">
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="number" placeholder="Enter Mobile" />
    
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" onClick={onClickButton}>
    Submit
  </Button>

  
</Form>
    </div>
  )
}

export default Register