import React, { useState } from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
// import "./App.css"; // Import the custom CSS file for styling
import { useNavigate } from "react-router-dom";

const Main = () => {
  let navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    // Implement your login logic here
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setLoggedIn(false);
    navigate(`/login`);
  };

  return (
    <div className="app">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" style={{ marginLeft: "30px" }}>
          Welcome to Accredian
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="background-image">
              {isLoggedIn ? (
                <div>
                  <p>You are logged in!</p>
                  <Button variant="danger" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Button variant="primary" onClick={handleLogin}>
                  Login
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
