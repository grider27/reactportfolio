import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import background from "./img/hero.jpg";

function App() {
  return (
    <Router>
      <div className="app" style={{ 
      backgroundImage: `url(${background})` 
    }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
