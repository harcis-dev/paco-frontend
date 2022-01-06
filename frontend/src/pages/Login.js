import React, { useState, Linking } from "react";
import {
  Form,
  FormItem,
  Input,
  InputType,
  CheckBox,
  FormGroup,
  Button,
} from "@ui5/webcomponents-react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form>
        <FormGroup titleText={"Login"}>
          <FormItem label={"Email"}>
            <Input type={InputType.Email} />
          </FormItem>
          <FormItem label="Password">
            <Input type={InputType.Text} />
          </FormItem>
          <FormItem>
            <a id="text" href="https://google.com">
              Forgot password?
            </a>
          </FormItem>
          <FormItem>
            <CheckBox text="Keep me logged in" />
          </FormItem>
          <FormItem id="buttons">
            <Button design="Emphasized">Login</Button>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button>Register</Button>
          </FormItem>
        </FormGroup>
      </Form>
    </div>
  );
}
