// src/Projects.js
import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'Projects';
const classes = {
  paper: `${PREFIX}-paper`,
  card: `${PREFIX}-card`,
  media: `${PREFIX}-media`,
  cardContent: `${PREFIX}-cardContent`,
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.paper}`]: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(4),
  },
  [`& .${classes.card}`]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  [`& .${classes.media}`]: {
    height: 140,
  },
  [`& .${classes.cardContent}`]: {
    flexGrow: 1,
  },
}));

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    image: 'https://via.placeholder.com/150',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    image: 'https://via.placeholder.com/150',
    link: '#',
  },
  // Add more projects here
];

function Projects() {
  return (
    <Root>
      <Container>
        <Paper className={classes.paper}>
          <Typography variant="h4" gutterBottom>
            My Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography>
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Root>
  );
}

export default Projects;
