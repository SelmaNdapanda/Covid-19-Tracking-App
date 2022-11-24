import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCountries, filterCountry } from "../redux/countrySlice";
import Navbar from '../components/Navbar';
import CountryCard from '../components/Card';
import TotalCard from '../components/TotalCard';
import Filter from '../components/Filter';

const Home = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  console.log(countries.countries)

//   let total = 0;
//   if (countries) {
//     countries.map((element) => {
//       total += element.All.TotalConfirmed;
//     });
//   }
// console.log(total)

  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);
  
  // const handleFilter = (value) => {
  //   dispatch(filterCountry(value));
  // };

  return (
  //   <div>
  //     <Navbar title="All Countries cases" left="2022" />
  //     <div>
  //       <div className="d-flex align-items-center justify-content-evenly px-2 py-3 main-card">
        
  //         <TotalCard name="COUNTRIES" total={total} className="fs-2" />
  //       </div>
  //       <div className="d-flex align-items-center justify-content-around filter">
  //         <p>STATS BY COUNTRY</p>
  //         <Filter handleFilter={handleFilter} />
  //       </div>
  //       <div className="d-flex flex-wrap">
  //         {countries && countries.map((country) => (
  //           <CountryCard key={country.All.Country} country={country} />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  <div> Hello</div>
  );
};

export default Home;