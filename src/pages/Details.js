import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from '../components/Navbar';
import TotalCard from '../components/TotalCard';
import { loadCountries } from '../redux/countrySlice';
import covid from '../assets/covid.svg';

const Details = () => {
  const country = useSelector((state) => state.countries);
  const { name } = useParams();
  console.log(country)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCountries(name));
  }, [dispatch, name]);

  return (
    <div>
      {country && country.countries?.Countries?.filter((item) => item.Country === name).map((country)=> (
        <div>
          <Navbar className="nav" title={country.Country} left={<FaLessThan />} />
          <div className="d-flex align-items-center justify-content-evenly px-2 py-3 main-card">
            <img src={covid} alt="covid virus" className="map w-25 h-25" /> 
            <TotalCard name={country.Country} total={country.TotalConfirmed} />
          </div>
          <div className="d-flex align-items-center justify-content-around filter">
            <p className="stats">COUNTRY BREAKDOWN</p>
          </div>
          <ListGroup as="ul" className="text-light">
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h4>Country Code</h4>
              <p>{country.CountryCode}</p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h4>New Confirmed</h4>
              <p>{country.NewConfirmed}</p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h4>New Deaths</h4>
              <p>{country.NewDeaths}</p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h4>Total Deaths</h4>
              <p>{country.TotalDeaths}</p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h4>New Recovered</h4>
              <p>{country.NewRecovered}</p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h4>Total Recovered</h4>
              <p>{country.TotalRecovered}</p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h4>Date</h4>
              <p>{country.Date}</p>
            </ListGroup.Item>
          </ListGroup>
        </div>
      ))}
    </div>
  );
};

export default Details;
