import React from "react";
import "../Components/Course.css"
import {Card, 
CardBody,
   CardTitle, 
     CardSubtitle, 
     CardText, 
    Button,
    CardGroup,
    CardImg
    } from "reactstrap";
    import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
    
    
const course=({ courses,update })=>{
  const deleteCourse=(id)=>{
       axios.delete(`${base_url}/deleteCourse/${id}`).then(
        (response)=>{
          toast.success("Course Delted");
          update(id);
        },
        (error)=>{
           toast.error("Server error");
        }
       )
  };
    return(

 <Card color="light" className="cards" >
<img
    alt="Card image"
    src="https://picsum.photos/300/200"
    top
      width="80%"
  /> 
  
  <CardBody height="10%" width="20%"> 
    <CardTitle tag="h5"> 
      {courses.title}
    </CardTitle>
    <CardText>
      {courses.description}
    </CardText>
    
    <div className="btndiv">
    <Button color="primary">
      Add Course
    </Button >
    <Button color="primary">
      Update Course
    </Button>
    <Button color="primary" onClick={()=>{
      deleteCourse(courses.id);
    }}>
      Delete Course
    </Button>
    </div>
  </CardBody>
</Card> 
);}

export default course;
