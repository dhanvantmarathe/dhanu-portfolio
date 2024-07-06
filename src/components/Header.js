// import React from "react";

// import Button from "@mui/material/Button";

// // import { Link } from "react-router-dom";
// import { Link, animateScroll as scroll } from "react-scroll";
// import { pdfjs } from "react-pdf";
// import { saveAs } from "file-saver";


// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const Header = () => {
//   const downloadResume = () => {
//     saveAs(`${process.env.PUBLIC_URL}/dhanu-resume.pdf`, "Dhanvant.pdf");
//   };

//   return (
//     <>
//       <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
//         <Container fluid>
//           <Navbar.Brand>
//             {/* <Button color="inherit" component={Link} to="/">
//               Portfolio
//             </Button> */}
//             <Link to="/" smooth={-100} duration={50}>
//               Portfolio
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls="basic-navbar-nav"
//             style={{
//               textAlign: "justify",
//             }}
//           />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               {/* <Button color="inherit" component={Link} to="/">
//                 Home
//               </Button> */}
//               <Link to="home" smooth={true} duration={50}>
//                 Home
//               </Link>
//               {/* <Button color="inherit" component={Link} to="about">
//                 About
//               </Button> */}
//               <Link to="about" smooth={-100} duration={50}>
//                 About
//               </Link>
//               {/* <Button color="inherit" component={Link} to="projects">
//                 Projects
//               </Button> */}
//               <Link to="projects" smooth={-100} duration={50}>
//                 Projects
//               </Link>

//               <Button color="inherit" onClick={downloadResume}>
//                 Resume
//               </Button>

//               {/* <Button color="inherit" component={Link} to="contact">
//                 Contact
//               </Button> */}
//               <Link to="contact" smooth={150} duration={50}>
//                 Contact
//               </Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Header;

import React from "react";
// import { Button } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import { pdfjs } from "react-pdf";
import { saveAs } from "file-saver";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Header = () => {
  const downloadResume = () => {
    saveAs(`${process.env.PUBLIC_URL}/dhanu-resume.pdf`, "Dhanvant.pdf");
  };

  



  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" smooth={true} duration={50} >
            Portfolio
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto   " style={{fontSize:'20px',fontFamily:'sans-serif'}}>
            <Link to="home" smooth={true} duration={50} offset={-110} className="nav-link">
              Home
            </Link>
            <Link to="about" smooth={true} duration={50} offset={-100} className="nav-link">
              About
            </Link>
            <Link to="projects" smooth={true} duration={50} offset={-100} className="nav-link">
              Projects
            </Link>
            <Link color="inherit" onClick={downloadResume} className="nav-link">
              Resume
            </Link>
            <Link to="contact" smooth={true} offset={-100} duration={50} className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
