import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SignUpper from "./SignUpper";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required.");
      return false;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return false;
    }

    // Additional validation logic can be added here

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission or further actions
      const saveUserData = async () => {
        try {
          const response = await axios.post(
            "https://bu-l2g5.onrender.com/saveUserData",
            formData
          );

          if (response.data.success) {
            console.log("User data saved successfully");
            // alert("User data saved successfully");
            navigate(`/login`);
            // You can reset the form or perform any other actions after successful save
          } else {
            console.error("Failed to save user data");
            alert("Failed to save user data");
            // Handle the error accordingly
          }
        } catch (error) {
          console.error("Error saving user data:", error);
          alert("invalid credential or use different email");
        }
      };
      saveUserData();
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
      <SignUpper data={"Signin"} />
      <Container style={{ marginTop: "0px", marginTop: "-50px" }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

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

              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                variant="dark"
                type="submit"
                style={{ marginTop: "10px" }}
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

export default Signup;
