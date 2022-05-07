import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 36,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  link: {
    fontWeight: 500,
    fontSize: 24,
    textAlign: 'center',
    borderBottom: '1px solid #000000',
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>PhoneBook☎️servise</h1>
    <span style={styles.text}>SignIn</span>
    <Link to="/register" style={styles.link}>
      Don't have an account?
    </Link>

    <Link to="/login" style={styles.link}>
      Already have an account?
    </Link>
  </div>
);

export default HomePage;
