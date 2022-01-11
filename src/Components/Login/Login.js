import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

import "./Login.css";

const Login = () => {
  const { hanldeUserInfoRegister, user, signInUsingGoogle, handleUserLogin, setUser, setIsLoading } =
    useAuth();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const history = useHistory();
  const location = useLocation();

  const redirect_url = location.state?.from || "/home";

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    handleUserLogin(userEmail, userPassword)
      .then((result) => {
        setIsLoading(true);
        setUser(result.user);
        history.push(redirect_url);
      })
      .finally(() => setIsLoading(false));
  };

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((res) => {
        const user = res.user;
        hanldeUserInfoRegister(user.email, user.displayName, 'PUT');
        setIsLoading(true)
        setUser(res.user)
        history.push(redirect_url)
      }
      )
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  };

  return (
    <div className="m-5">
      <h3
        className="text-center"
        style={{ fontFamily: "normal", fontSize: "35px" }}
      >
        <b>Please Sign in</b>
      </h3>
      <div
        className="login-container w-50 mx-auto p-5 my-4"
        style={{
          borderRadius: "5px",
          backgroundColor: "rgb(200, 235, 241)",
          boxShadow: "5px 5px 10px tan",
        }}
      >
        <Form onSubmit={handleLogin} className="login-form w-75 mx-auto">
          <Form.Group className="" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mt-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassword}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <br />
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            style={{ backgroundColor: "rgb(219, 137, 30)", border: "none" }}
          >
            LOG IN
          </Button>
        </Form>
        <div className="m-3 text-center">----------OR----------</div>
        <div className="text-center">
          <Button
            className="login-btn w-75"
            style={{ backgroundColor: "rgb(219, 137, 30)", border: "none" }}
            onClick={handleGoogleLogin}
          >
            LOG IN WITH GOOGLE
          </Button>
        </div>
        <br />
        <p className="mt-3 text-center">
          New to Aurora? <Link to="/register">Sign up now!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
