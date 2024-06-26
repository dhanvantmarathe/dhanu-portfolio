// src/Contact.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'Contact';
const classes = {
  paper: `${PREFIX}-paper`,
  form: `${PREFIX}-form`,
  field: `${PREFIX}-field`,
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.paper}`]: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(4),
  },
  [`& .${classes.form}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  [`& .${classes.field}`]: {
    margin: theme.spacing(2),
    width: '100%',
  },
}));

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log({ name, email, message });
  };

  return (
    <Root>
      <Container>
        <Paper className={classes.paper}>
          <Typography variant="h4" gutterBottom>
            Contact Me
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={classes.field}
            />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.field}
            />
            <TextField
              label="Message"
              variant="outlined"
              required
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={classes.field}
            />
            <Button type="submit" variant="contained" color="primary" className={classes.field}>
              Send Message
            </Button>
          </form>
        </Paper>
      </Container>
    </Root>
  );
}

export default Contact;
