import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cartbtn = () => {
  return (
    <>
        <NavLink to="/cart" className="btn btn-outline-primary ms-2">
            <span></span>
        </NavLink>
    </>
  )
}

export default Cartbtn