import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SignUpper from "./SignUpper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { email, password } = formData;

    if (!email || !password) {
      setErrorMessage("All fields are required.");
      return false;
    }

    // Additional validation logic can be added here

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission or further actions
      handleLogin();
    }
  };
  const change = () => {
    navigate("/signin");
  };
  const handleLogin = async () => {
    console.log("hi");
    try {
      const response = await axios.post(
        "https://bu-l2g5.onrender.com/login",
        formData
      );

      if (response.data.success) {
        console.log("Login successful");
        navigate(`/main`);
        // alert("Login successful");
        // You may redirect to another page or update the UI
      } else {
        console.error();
        alert("Login failed");
        // Handle the error accordingly, e.g., show an error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error credentials ,Please try again");
    }
  };

  return (
    <div
      style={{
        background: "lightgrey",
        width: "100%",
        height: "100%",
        position: "fixed",
      }}
    >
      <SignUpper data={"Login"} />
      <Container style={{ marginTop: "0px", marginTop: "-50px" }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                variant="dark"
                type="submit"
                style={{ marginTop: "10px" }}
              >
                Login
              </Button>
              <Button
                onClick={change}
                variant="dark"
                type="submit"
                style={{ marginLeft: "30px", marginTop: "10px" }}
              >
                Sign Up
              </Button>

              {errorMessage && (
                <p style={{ color: "red", marginTop: "10px" }}>
                  {errorMessage}
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
