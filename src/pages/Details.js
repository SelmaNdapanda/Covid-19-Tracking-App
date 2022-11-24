import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from '../components/Navbar';
import TotalCard from '../components/TotalCard';
import { loadCountries } from '../redux/countrySlice';
// import covid from '../assets/covid.svg';

const Details = () => {
  const country = useSelector((state) => state.countries);
  const { name } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCountries(name));
  }, [dispatch, name]);

  return (
    <div>
      {country && (
        <div>
          <Navbar title={country.Country} left={<FaLessThan />} />
          <div className="d-flex align-items-center justify-content-evenly px-2 py-3 main-card">
            {/* <img src={covid} alt="covid virus" className="map w-25 h-25" />  */}
            <TotalCard name={country.Country} total={country.TotalConfirmed} />
          </div>
          <div className="d-flex align-items-center justify-content-around filter">
            <p>COUNTRY BREAKDOWN</p>
          </div>
          <ListGroup as="ul" className="text-light">
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h3>Country Code</h3>
              <p>{country.CountryCode}</p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h3>New Confirmed</h3>
              <p>{country.NewConfirmed}</p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h3>New Deaths</h3>
              <p>{country.NewDeaths}</p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h3>Total Deaths</h3>
              <p>{country.TotalDeaths}</p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h3>New Recovered</h3>
              <p>{country.NewRecovered}</p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h4>Total Recovered</h4>
              <p>{country.TotalRecovered}</p>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h3>Date</h3>
              <p>{country.Date}</p>
            </ListGroup.Item>
          </ListGroup>
        </div>
      )}
    </div>
  );
};

export default Details;