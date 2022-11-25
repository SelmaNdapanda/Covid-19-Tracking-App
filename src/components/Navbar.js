import React from 'react';
import { MdMic, MdSettings } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const { title, left } = props;
  if (title !== 'All Countries Covid-19 cases') {
    return (
      <div className="d-flex justify-content-between align-items-center navbar">
        <NavLink to="/">{left}</NavLink>
        <p>{title}</p>
        <div className="fs-4">
          <MdMic className="me-3" />
          <MdSettings />
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-between align-items-center navbar">
      <p>{left}</p>
      <p>{title}</p>
      <div className="fs-4">
        <MdMic className="me-3" />
        <MdSettings />
      </div>
    </div>
  );
};

export default Navbar;