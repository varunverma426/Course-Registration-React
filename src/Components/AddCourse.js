import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

// let headers = new Headers();
// headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
// headers.append('Access-Control-Allow-Credentials', 'true');

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Courses || India";
  }, []);

  const [course, setCourse] = useState({});

  const handleForm = (e) => {
    console.log(course);
    ServerAddCourse(course);
    e.preventDefault();
  };

  //Call Server to Add Course
  const ServerAddCourse = (course) => {
    axios.post(`${base_url}/addCourse`,course).then(
      (response) => {
        console.log(response);
        toast.success("Course Added");
      },
      (error) => {
        console.log(error)
        toast.error("Error while adding the course");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="userid">Course Id</Label>
          <Input
            id="userid"
            name="userid"
            placeholder="enter course id"
            type="text"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="utitle">Course Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="enter course title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Course Description</Label>
          <Input
            id="description"
            name="descriptio"
            type="textarea"
            placeholder="enter course description"
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container style={{ display: "flex", justifyContent: "space-evenly;" }}>
          <Button color="success" type="submit" >
            Add Course
          </Button>
          <Button type="reset"> Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
