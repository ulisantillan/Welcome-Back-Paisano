import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Resources from './components/Resources';
import LearnMore from './components/LearnMore';
import Navbar from './components/CustomNavbar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/resources" component={Resources} />
          <Route path="/learnMore" component={LearnMore} />
        </div>
      </Router>
    );
  }
}

export default App;
