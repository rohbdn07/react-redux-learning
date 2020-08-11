import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './Components/Layout/NavigationBar'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <NavigationBar></NavigationBar>
        </div>
      </div>
    </Router>
  );
}

export default App;
