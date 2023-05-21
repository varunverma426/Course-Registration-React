import "./App.css";
import { Button, CardGroup, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import AllCourses from "./Components/AllCourses";
import "./Components/Course.css";
import AddCourse from "./Components/AddCourse";
import Menus from "./Components/Menus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";


function App() {
  const notify = () => {
    toast("hello");
    toast.success("Good you succeded");
    toast.warning("Failed");
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Container>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/home" element={<Home />} exact />
                 <Route  path="/add-course" element={<AddCourse />}  exact/>
                 <Route   path="/view-course" element={<AllCourses />}  exact/>  
                 <Route   path="/about" element={<About />}  exact/>    
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
  {
    /* <Home />
      
      <div style={{display:"flex", justifyContent:"space-around"}}>
      <AllCourses />
      <AllCourses />
      <AllCourses />
      </div>
      <AddCourse /> */
  }
}

export default App;
