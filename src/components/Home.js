// src/Home.js
import React from 'react';
import {  Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
     
      <Grid container mt={25} spacing={3}  style={{ height: '80vh' }}>
        <Grid item xs={12} sm={8} md={6}  >
          <Typography variant="h2" align="center" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Hi, I'm <span style={{color:'red',fontSize:'30px',fontWeight:500}}>Dhanvant Marathe</span>, a MERN stack developer.
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            I specialize in building scalable and responsive web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/about">
                About Me
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" component={Link} to="/projects">
                My Projects
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="success" component={Link} to="/contact">
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  
  );
}

export default Home;
