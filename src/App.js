import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Details from './pages/Details';
import { loadCountries } from './redux/countrySlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
