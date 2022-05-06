import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  display: 'inline-block',
  textDecoration: 'none',
  padding: 12,
  fontWeight: 700,
  color: '#290249',
};

let activeStyle = {
  display: 'inline-block',
  textDecoration: 'none',
  padding: 12,
  fontWeight: 700,
  color: '#b90b7f',
  borderBottom: '3px solid rgb(132, 10, 148)',
};

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact="true"
      style={({ isActive }) => (isActive ? activeStyle : styles)}
    >
      Регистрация
    </NavLink>
    <NavLink
      to="/login"
      exact="true"
      style={({ isActive }) => (isActive ? activeStyle : styles)}
    >
      Логин
    </NavLink>
  </div>
);

export default AuthNav;
