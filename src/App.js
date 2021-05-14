import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
//import About from './components/About';
//import Projects from './components/Projects';
import Footer from './components/Footer';
//import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
