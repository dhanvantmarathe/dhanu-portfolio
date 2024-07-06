
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home';
// import About from './components/About';

// import Projects from './components/Projects';
// import Contact from './components/Contact';
import theme from './components/theme'
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline/>
    <Router>
      <div  id='home'
      >
        <Header />
        {/* <div style={{ padding: 20 }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
           
            <Route path="/contact" component={Contact} />
            
          </Switch>
        </div> */}
        <Home/>
      </div>
    </Router>
    
    </ThemeProvider>
    
  );
}

export default App;
