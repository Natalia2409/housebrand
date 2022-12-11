import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/MainPage/Header';
import MainPage from "./pages/MainPage";
import Footer from './components/MainPage/Footer';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/help" component={Help} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
