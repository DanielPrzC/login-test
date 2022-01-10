import React, { useState } from "react";
import { Section, Form, Input, ErrorMsg } from "./styles";
import Button from "../Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [error, setError] = useState("");

  const handleChangeEmail = (e) => {
    e.preventDefault();

    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    setPasword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:4000/api/auth";
    const bodyReq = { email, password };
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyReq),
    });

    const data = await res.json();

    console.log(data);

    if (data.isLogged === true) {
      localStorage.setItem("isLogged", data.isLogged);
      window.location = "/";
    } else if (data.isLogged === false) {
      setError(data.message);
    }
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <h1>Login to your account</h1>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChangeEmail}
          value={email}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChangePassword}
          value={password}
          required
        />
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <Button type="submit">Sign In</Button>
      </Form>
    </Section>
  );
};

export default LoginForm;
