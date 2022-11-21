import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        {/* <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:name">
            <Details />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
