import React from 'react';
import './App.css';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from 'react-social-login-buttons';


function App() {
  return (
    <form className="login">
      <h1>
      <span className="font-weight-bold">Sign Up</span></h1>
      <FormGroup>
        <Label>Name :</Label>
          <Input type="text" placeholder="Name"/>
      </FormGroup>
      <FormGroup>
        <Label>E-mail :</Label>
          <Input type="email" placeholder="Email"/>
      </FormGroup>
      <FormGroup>
        <Label>Password :</Label>
          <Input type="password" placeholder="Password"/>
      </FormGroup>
      <FormGroup>
        <Label>Confirm Password :</Label>
          <Input type="password" placeholder="Confirm Password"/>
      </FormGroup>
      <Button className="btm-lg- btn-dark btn-block">
      Register
      </Button>
      <div className="text-center pt-3">
      Or continue with your social accounts
      </div>
      <GoogleLoginButton className="mt-3 mb-3" />
      <TwitterLoginButton className="mt-3 mb-3" />
      <FacebookLoginButton className="mt-3 mb-3" />
      <div className="text-center">
      <a href="/login">Login</a>
      <span className="p-3">|</span>
      <a href="/forgetpassword">Forget Password</a>
      </div>
    </form>
  );
}

export default App;
