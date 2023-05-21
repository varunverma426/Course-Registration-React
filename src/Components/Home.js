import React, { useEffect } from "react";
 import { Button } from "reactstrap";
 import { ToastContainer, toast } from 'react-toastify';
import AddCourse from "./AddCourse";


 const notify = () => {
    toast("hello");
    toast.success("Good you succeded");
    toast.warning("Pagal hai kya");
  }



const Home=()=>{
   useEffect(()=>{
     document.title="Varun Verma || India";
      },[]);
    return(      
        
        
       //Using instead of Jumbotron
        <div class="jumbotron"  style={{textAlign:"center"}}>
             <h1 class="display-4">Welcome to Varun's World</h1>
             <p>My Name is Varun Verma</p>
             <Button color="primary" onClick={notify}>Wanna Try!!! </Button>
             
        </div>
       
    
       
    )
}

export default Home;