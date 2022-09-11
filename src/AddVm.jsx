import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import axios from 'axios'
import ColorSchemesExample from "./Navbar";


function AddVm() {

  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [host, setHost] = useState("");
  const [size_MiB, setSize_MiB] = useState("");
  const [guest_OS, setGuest_OS] = useState("");

  const addvm = async (e) => {
    e.preventDefault();
   
      await axios({
        method: "post",
        url: `http://127.0.0.1:5000/vm`,
      
        data: {
          name:name,
          count:count,
          host:host,
          size_MiB:size_MiB,
          guest_OS:guest_OS
         
        },
      })
        .then((response) => {
          console.log(response.data)
       
        })
   
     
    
  };
  return (
    <div>
      <ColorSchemesExample/>
    <Form className='ml-10' onSubmit={addvm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NAME</Form.Label>
        <Form.Control type="text" placeholder="Enter VM name" 
          onChange={(e) => setName(e.target.value)}
          value={name}
          aria-describedby="inputGroupPrepend"
          required />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>HOST</Form.Label>
        <Form.Control type="text" placeholder="Link to Host" 
         onChange={(e) => setHost(e.target.value)}
         value={host}
         aria-describedby="inputGroupPrepend"
         required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Guest Os</Form.Label>
        <Form.Control type="text" placeholder="Enter Guest Os" 
         onChange={(e) => setGuest_OS(e.target.value)}
         value={guest_OS}
         aria-describedby="inputGroupPrepend"
         required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>MEMORY_SIZE_MiB</Form.Label>
        <Form.Control type="text" placeholder="Enter memo size"
         onChange={(e) => setSize_MiB(e.target.value)}
         value={size_MiB}
         aria-describedby="inputGroupPrepend"
         required />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>CPU_COUNT</Form.Label>
        <Form.Control type="text" placeholder="Enter CPU_Count"
            onChange={(e) => setCount(e.target.value)}
            value={count}
            aria-describedby="inputGroupPrepend"
            required />
      </Form.Group>
   
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
    </div>
  );
}

export default AddVm;