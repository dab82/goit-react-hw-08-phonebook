import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const styles = {
  display: 'inline-block',
  textDecoration: 'none',
  fontWeight: 700,
  color: '#290249',
};

let activeStyle = {
  display: 'inline-block',
  textDecoration: 'none',

  fontWeight: 700,
  color: '#b90b7f',
  borderBottom: '3px solid rgb(132, 10, 148)',
};
const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {!isLoggedIn ? (
        <NavLink
          to="/"
          exact="true"
          style={({ isActive }) => (isActive ? activeStyle : styles)}
        >
          Главная
        </NavLink>
      ) : (
        <NavLink
          to="/contactcs"
          exact="true"
          style={({ isActive }) => (isActive ? activeStyle : styles)}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
