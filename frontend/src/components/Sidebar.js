import React from "react";
import { Typography,  Grid } from "@mui/material";
// import { Link } from 'react-router-dom';
import profile from "./img/profile2.png";
// import Image from 'react-bootstrap/Image';

const Sidebar = () => {
  return (
    <div>
      <Grid container  mt={17.7} spacing={3} style={{ height: "80vh" }}>
        <Grid ml={1} item xs={7} sm={7} md={6} > 
          <Grid item xs={10} sm={10} md={10}>
          <Typography variant="h3" align="center"  gutterBottom>
            Welcome to My Portfolio
          </Typography>
          </Grid>
          <Typography variant="h5" align="center" paragraph>
            Hi, I'm{" "}
            <span style={{ color: "red", fontSize: "30px", fontWeight: 500 }}>
              Dhanvant Marathe
            </span>
            , a MERN stack developer.
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            I specialize in building scalable and responsive web applications
            using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
          </Typography>
          <Grid >
            {/* <Grid item>
              <Button variant="contained" color="primary" component={Link} to="about">
                About Me
              </Button>
            </Grid> */}
            {/* <Grid item>
              <Button variant="contained" color="secondary" component={Link} to="projects">
                My Projects
              </Button>
            </Grid> */}
            {/* <Grid item>
              <Button variant="contained" color="success" component={Link} to="contact">
                Contact Me
              </Button>
            </Grid> */}

            <img
              height={"60%"}
              width={"45%"}
              src={profile}
              alt="profile-image"
              style={{
                position: "absolute",
                top: "25%",
                right: "-3%",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sidebar;
