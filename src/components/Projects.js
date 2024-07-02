
import React from 'react';
import { Container,Link, Typography, Card, CardContent, CardMedia, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import textutil from './img/textutil.jpeg';
import calculator from './img/calculator.png';
import todo from './img/todo.png';
import quora from './img/quora.png';
import random from './img/random.png'
import portfolio from './img/portfolio.png'



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
    marginTop: theme.spacing(10),
    // marginTop:'100px',
  },
  [`& .${classes.card}`]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  [`& .${classes.media}`]: {
    height: 105,
    
   
  },
  [`& .${classes.cardContent}`]: {
    flexGrow: 1,
  },
  
}));

const projects = [
  {
    title: 'Personal-portfolio',
    description: 'This is personal portfolio website using react js and material ui and api integration with axios',
    image: portfolio,
   
  },
  {
    title: 'Textutil',
    description: 'This is text convertor using react.js',
    image: textutil,
   
  },
  {
    title: 'Simple Calculator',
    description: 'This is simple calculator using html css and javascript',
    image: calculator,
   
  },
  {
    title: 'Quora UI Clone',
    description: 'This is simple UI clone of Quora using javascript and react js' ,
    image: quora,
   
  }, 
  {
    title: 'Todo list',
    description: 'This is simple Todo list using react js with vite',
    image: todo,
   
  },    
  
  {
    title: 'Random User Generator ',
    description: 'This is Random User Generator using react js with integration with api',
    image: random,
  
  },  
 
];

function Projects() {
  return (
    <Root>
      <Container>
        <Paper className={classes.paper}>
          <Typography variant="h4" gutterBottom >
            My Projects
          </Typography>
          <Grid container spacing={5} mt={1}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={project.image}
                    
                    title={project.title}
                    link={project.link}
                  />
                
                  <p>_______________________________________________</p>                  
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <Link href='https://github.com/dhanvantmarathe?tab=repositories'  underline="hover" target='_blank'>Github link</Link>
                 
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
