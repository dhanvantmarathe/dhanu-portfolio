// import React from 'react';
// import { Box, Container, Grid,  Typography } from '@mui/material';

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         width: '100%',
//         backgroundColor: 'gray',
//         color: 'white',
//         padding: '20px 0',
//         marginTop: '20px',
//         borderRadius:'10px',

//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>

//           <Grid item xs={12} sm={4} >

//             <Typography variant="body2">
//               Email: marathe8459@gmail.com
//             </Typography>
//             <Typography variant="body2">
//               Phone: 8459967319
//             </Typography>
//             <Typography variant="body2">
//               Address: At Post Deogaon Taluka Parola <br/>
//               District Jalgaon Maharashtra 425112
//             </Typography>
//           </Grid>
//         </Grid>
//         <Box
//           sx={{
//             textAlign: 'center',
//             marginTop: '20px',
//           }}
//         >
//           <Typography variant="body2">
//             &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;

import React from "react";
import { MDBFooter, MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import { MDBIcon } from "mdbreact";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <MDBFooter
      className="text-center"
      color="white"
      style={{ backgroundColor: "#343a40",marginTop:'10px',marginBottom:'10px' }}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#ac2bac", color: "red" }}
            href="https://www.instagram.com/mr_dhanvant07/"
            target="_blank"
            role="button"
            title="Instagram"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/dhanvant-marathe-12a1b5236/"
            target="_blank"
            role="button"
            title="Linkedin"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/dhanvantmarathe"
            target="_blank"
            role="button"
            title="GitHub"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className=" text-white py-4">
        <Container>
          <Col className="text-md-left bold">
            <h4 style={{ color: "red" }}>Information</h4>
            <p>
              {" "}
              Hello  I'm Dhanvant Marathe, a dedicated and enthusiastic MERN
              stack developer currently pursuing my Master of Computer
              Applications (MCA) from IMRD College, Shirpur. Born on November
              25, 2002, I have always been passionate about technology and web
              development. With a solid foundation in MongoDB, Express.js,
              React, and Node.js, I specialize in creating seamless and dynamic
              web applications. My current location is Parola, Jalgaon (425111),
              where I am actively seeking opportunities to collaborate on
              innovative projects and contribute to the tech community.{" "}
            </p>
          </Col>
          <Col className="text-md-left">
            <h4 style={{ color: "red" }}>Contact us</h4>
            <ul className="list-unstyled">
              <li>Email: marathe8459@gmail.com</li>
              <li>Mobile:8459967319</li>
            </ul>
          </Col>

          <Row className="mt-3">
            <Col className="text-center">
              &copy; {new Date().getFullYear()} My Portfolio. All rights
              reserved.
            </Col>
          </Row>
        </Container>
      </div>
    </MDBFooter>
  );
}
