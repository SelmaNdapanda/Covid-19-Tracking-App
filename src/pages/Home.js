import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCountries } from '../redux/countrySlice';
import Navbar from '../components/Navbar';
import CountryCard from '../components/Card';
import TotalCard from '../components/TotalCard';
import world from '../assets/world.svg';

const Home = () => {
  const [myin, setMyin] = useState('');
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const ghs = new RegExp(myin, 'i');

  let total = 0;
  if (countries) {
    countries.countries?.Countries?.forEach((element) => {
      total += element.TotalConfirmed;
    });
  }

  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);

  return (
    <div>
      <Navbar title="All Countries Covid-19 cases" left="2022" />
      <div>
        <div className="d-flex align-items-center justify-content-evenly px-2 py-3 main-card">
          <img src={world} alt="world map" className="map w-25 h-25" />
          <TotalCard name="COUNTRIES" total={total} className="fs-2" />
        </div>
        <div className="d-flex align-items-center justify-content-around filter">
          <p className="stats">STATS BY COUNTRY</p>
          <input
            type="text"
            value={myin}
            onChange={(e) => setMyin(e.target.value.trim())}
            placeholder="My Search"
          />
        </div>
        <div className="d-flex flex-wrap">
          {countries
            && countries.countries?.Countries?.filter(
              (item) => ghs.test(item.Country) === true,
            ).map((country) => (
              <CountryCard
                key={country.ID}
                country={country.Country}
                totalCases={country.TotalConfirmed}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
