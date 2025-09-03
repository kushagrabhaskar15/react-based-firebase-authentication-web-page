import React,{ useState } from "react";
import "./Login_SignUp.css";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try{
        const userCredentials = await signInWithEmailAndPassword(auth,email,pass);
        toast.success("User Signed In Successfully");
        navigate("/profile");

    }
    catch(error){
        toast.error(error.message,{position:"bottom-center"});
    }
  }

  return (
    <div className="login">
      <h4 style={{ textAlign: "center" }}>Login</h4>
      
      <Form onSubmit={handleSignin}>
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
