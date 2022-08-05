import React from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './login.css'
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPawssword] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // call function login
    navigate('/foodtrucks')
  } 
  //useEffect(() => {

  //}, [email, password])

  return(
    <>
      <Container className="pa-6">
        <div className="d-flex align-items-center justify-content-center my-5">
        <img className="logo" src={require('./logo-plumstreet.png')}/>
        </div>
        <div className="d-flex align-items-center justify-content-center">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="loginForm">
            <Form.Control className="mb-4" type="email" value={email} placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)}/>
            <Form.Control className="mb-4" type="password" value={password} placeholder="MOT DE PASSE"  onChange={(e) => setPawssword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <div className="d-flex justify-content-between">
              <Form.Check type="checkbox" label="Remember me" />
              <p>Forgot Password</p>
            </div>
      </Form.Group>
      <div  className="d-grid">
      <Button className="base-btn" type="submit">
        Submit
      </Button>
      </div>
    
        </Form>
        </div>
      </Container>
    </>
  ) 
}
export default Login