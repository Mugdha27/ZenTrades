import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import "./Screen.css";

const RegisterScreen = ({ location, history }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("password do not match");
    } else {
      dispatch(register(name, email, password, isAdmin));
    }
    //dispatch login
  };
  return (
    <FormContainer>
      <div className="mb-4">
        {" "}
        <h1 style={{ fontSize: "48px" }}>Sign Up</h1>
      </div>

      {message && <Message variant="danger" children={message} />}
      {error && <Message variant="danger" children={error} />}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>
            <h1 style={{ fontSize: "24px" }}>name</h1>
          </Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>
            <h1 style={{ fontSize: "24px" }}>Email address</h1>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
            
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>
            <h1 style={{ fontSize: "24px" }}>Password</h1>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>
            <h1 style={{ fontSize: "24px" }}>Confirm Password</h1>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <div className="form-gap"></div>
        {/* <Form.Group controlId="isadmin">
          <Form.Check
            type="checkbox"
            label="Register as a farmer"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          ></Form.Check>
        </Form.Group> */}
        <Button className="signUp" type="submit" variant="primary">
          Sign Up
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Have an account?
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            <span className="login">Log in</span>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
