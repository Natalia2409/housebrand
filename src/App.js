import React from 'react';
import './App.css';

import Header from './components/Header';
import MainPage from "./pages/MainPage";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
