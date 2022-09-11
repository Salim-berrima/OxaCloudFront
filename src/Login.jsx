import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import axios from 'axios'

import cookie from "js-cookie";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const authError = document.querySelector(".auth");

      await axios({
        method: "post",
        url: `http://127.0.0.1:5000/checkLogin`,
      
        data: {
          username:username ,
          password:password,
         
        },
      })
        .then((response) => {
          if(
          
          response.data)
          {

          cookie.set("jwt", response.data);
          window.location.href = '/navbar';
        }  else {
              authError.innerHTML = "Verify your username or password"

            }

                   
        })
    
  };
  let token =cookie.get("jwt");
  return (
    <div hidden={token}>

    <Form className='ml-10' onSubmit={login}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" 
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          aria-describedby="inputGroupPrepend"
          required />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
         onChange={(e) => setPassword(e.target.value)}
         value={password}
         aria-describedby="inputGroupPrepend"
         required/>
      </Form.Group>
      
      <div className="auth text-error"></div>
      <Button variant="primary" type="submit">
        Sign in
      </Button>
     
    </Form>
    </div>
  );
}

export default Login;