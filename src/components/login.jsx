import React,{ useState } from "react";
import "./Login_SignUp.css";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="login">
      <h4 style={{ textAlign: "center" }}>Login</h4>
      
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="xyz@domain.com"
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
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
            required
            onChange={(e)=>{setPass(e.target.value)}}
          ></Input>
        </FormGroup>
       
        <div style={{ display: "flex" }}>
          <Button color="primary" type="submit">
            Login
          </Button>
          <Button
            color="link"
            href="/signup"
            style={{ position: "absolute", right: "20px" }}
          >
            SignUp
          </Button>
        </div>
      
      </Form>
    </div>
  );
};

export default Login;
