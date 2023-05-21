import React from "react";
import "../Components/About.css"
import { Container, Row, Col } from "reactstrap";

// element.style {
//     color: slategray;
//   }
const About = () => {
  return (
  <div >
    <h3 className="styleabout" > About Us</h3>
    <Container>
     <Row>
            <Col md={6}>
            <img className="img" src="IMG_9498 2.png" alt="Flowers in Chania"></img>
            </Col>
            <Col md={6}>
                
                <h2 className="nameheading">Varun Verma</h2>
                <div className="paragraph">
                <p>I come from Allahabad a small town situated in Uttar Pradesh India ,</p>
                <p>Graduated from SRM Chennai KTR and having 2 years of experience in IT industry</p>
                <p>My first job was in Wipro Banglore where i worked for 10 month with Honda as a client working on Automotive</p>
                <p>Currently i am working in Temenos Banglore as a Product Engineer where i am responsible for creating Rest API for out Banking Services</p>
                </div>
            </Col>
    </Row>
    </Container>
  </div>
  );
};
export default About;
