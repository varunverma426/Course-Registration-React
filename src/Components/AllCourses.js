import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios";
import base_url from "../api/bootapi";
import {  toast } from "react-toastify";

const AllCourse = () => {
  useEffect(() => {
    document.title = "All Courses || India";
  }, []);

  
  //Fetch All Courses from Server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/course`).then(
      (response) => {
        //for resonse     
        //console.log(response.data);
        toast.success("Courses has been loaded",);
        setCourse(response.data);
      },
      (error) => {
        //For error
        toast.error("Error");
        console.log(error);
      }
    );
  };
  //Calling Loading course function (Can also be called in above useeffect Method)

  useEffect(()=>{
    getAllCoursesFromServer();
  
  },[] );

  const [course, setCourse] = useState([
    // { title: "Java Course", description: "this is a java Course 1" },
    // { title: "Django Course", description: "this is a Django Course 1" },
    // {
    //   title: "Java Script Course",
    //   description: "this is a java script Course 1",
    // },
  ]);
  //To delete course from frontend and call in delete function in Course.js
  const UpdateCourseById=(id)=>{
      setCourse(course.filter((c)=>c.id!=id));
  }
  return (
    <div>
      {course.length > 0
        ? course.map((item) => <Course key={item.id} courses={item} update={UpdateCourseById}/>)
        : "No Course"}
    </div>
  );
};

export default AllCourse;
