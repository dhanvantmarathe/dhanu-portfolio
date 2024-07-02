// src/Navbar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { pdfjs } from "react-pdf";
import { saveAs } from "file-saver";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PREFIX = "Navbar";
const classes = {
  root: `${PREFIX}-root`,
  menuButton: `${PREFIX}-menuButton`,
  title: `${PREFIX}-title`,
  hover:`${PREFIX}-hover`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
  },
  [`& .${classes.menuButton}`]: {
    marginRight: theme.spacing(2),
  },
  [`& .${classes.title}`]: {
    flexGrow: 1,
  },
  
}));

function Navbar() {
  const downloadResume = () => {
    saveAs(`${process.env.PUBLIC_URL}/dhanu-resume.pdf`, "Dhanvant.pdf");
  };
  return (
    <Root className={classes.root}>
      <AppBar position="fixed" sx={{ bgcolor: "black " }}>
        <Toolbar>
       
          <Typography variant="h6" className={classes.title}>
            Portfolio
          </Typography>
           <div  style={
            {
           
            }
           }>
           <Button  color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          {/* <Button color="inherit" component={Link} to="/resume">Resume</Button> */}
          <Button color='inherit' onClick={downloadResume}>Resume</Button>

          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
           </div>
        </Toolbar>
      </AppBar>
    </Root>
  );
}

export default Navbar;
