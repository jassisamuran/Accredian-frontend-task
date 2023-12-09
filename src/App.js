import logo from "./logo.svg";
import "./App.css";
import Signup from "./comonents/Signup";
/* The following line can be included in a src/App.scss */
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./comonents/Login";
import Main from "./comonents/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Signup /> */}
      <div className="App">
        <Router>
          <Routes>
            <Route path="/Login" exact element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/signin" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
