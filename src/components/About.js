// src/About.js
import React from "react";
import { Container, Typography, Grid, Paper, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "./img/logo.jpg";
import js from "./img/js.png";
import reac from "./img/react.png";
import mongo from "./img/mongo.png";
import node from "./img/node.png";
import express from "./img/express.png";
import material from "./img/material-ui.png";
import tailwind from "./img/tailwind.png";
import bootstrap from "./img/bootstrap.png";

const PREFIX = "About";
const classes = {
  paper: `${PREFIX}-paper`,
  avatar: `${PREFIX}-avatar`,
  section: `${PREFIX}-section`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.paper}`]: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  [`& .${classes.avatar}`]: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "auto",
  },
  [`& .${classes.section}`]: {
    marginTop: theme.spacing(4),
  },

  [`& .${classes.img}`]: {
    height: "90px",
    width: "90px",
  },
}));

function About() {
  return (
    <Root>
      <Container>
        <Paper className={classes.paper}>
          <Avatar
            alt="dhanvant_marathe"
            src={logo}
            className={classes.avatar}
          />
          <Typography variant="h2" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            "Hello I'm <strong>Dhanvant Marathe</strong>, a passionate <strong>MERN stack developer</strong> dedicated
            to crafting clean and efficient web applications. I specialize in
            building robust backend systems and dynamic frontend interfaces."
          </Typography>
          <Typography variant="body1" paragraph>
            Technologies Languages: JavaScript (ES6+) Frontend: React.js, Redux,
            HTML5, CSS3 Backend: Node.js, Express.js Database: MongoDB, Mongoose
            Tools: Git, VS Code, Postman, npm
          </Typography>
        </Paper>

        <Paper className={`${classes.paper} ${classes.section}`}>
          <Typography variant="h2" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={25} justifyContent="center">
            <Grid item>
              <Typography variant="body1">
                <img alt="js" src={js} className={`${classes.img}`} />
                <br />
                JavaScript.js
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <img alt="react" src={reac} className={`${classes.img}`} />
                <br />
                React.js
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <img
                  alt="material"
                  src={material}
                  className={`${classes.img}`}
                />
                <br />
                Material-UI
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <img alt="node" src={node} className={`${classes.img}`} />
                <br />
                Node.js
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <img
                  alt="tailwind"
                  src={tailwind}
                  className={`${classes.img}`}
                />
                <br />
                tailwind.css
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="body1">
                <img alt="express" src={express} className={`${classes.img}`} />
                <br />
                Express.JS
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <img alt="mongo" src={mongo} className={`${classes.img}`} />
                <br />
                MongoDB
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <img
                  alt="bootstrap"
                  src={bootstrap}
                  className={`${classes.img}`}
                />
                <br />
                Bootstrap
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Root>
  );
}

export default About;
