import { React, useState } from "react";
import "./Login.css";
import auth from './firebase';
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  
  const handleRegister= async (e) => {
    e.preventDefault();
    try{
        createUserWithEmailAndPassword(auth,email,pass);
        const user = auth.currentUser;
        console.log(user);
    }
    catch(error){
        console.log(error.message)
    }
  }

  return (
    <div className="login">
      <h4 style={{ textAlign: "center" }}>SignUp</h4>
      
      <Form>
      
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="YOUR NAME"
            type="text"
            onChange = {(e)=>setName(e.target.value)}
            required
          ></Input>
        </FormGroup>
      
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="xyz@domain.com"
            type="email"
            onChange = {(e)=>setEmail(e.target.value)}
            required
          ></Input>
        </FormGroup>
      
        <FormGroup>
          <Label for="pass">Password</Label>
          <Input
            id="pass"
            name="pass"
            placeholder="XXXXXXXX"
            type="password"
            onChange={(e)=>setPass(e.target.value)}
            required
          ></Input>
        </FormGroup>
      
        <div style={{ display: "flex" }}>
          <Button color="primary" type="submit">
            Login
          </Button>
          <Button
            color="link"
            href="/login"
            style={{ position: "absolute", right: "20px" }}
          >
            Login
          </Button>
        </div>
      
      </Form>
    </div>
  );
};

export default SignUp;
