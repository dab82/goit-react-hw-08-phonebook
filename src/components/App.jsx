import { GlobalStyle } from 'mainstyle/GlobalStyle';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';
import { Container } from './AppStyle';
import { SpinnerDotted } from 'spinners-react';
import AppBar from './AppBar/AppBar';
import PublicRoute from 'route/PublicRoute';
import PrivateRoute from 'route/PrivatRoute';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import PhoneBook from 'pages/PhoneBook/PhoneBook';
import HomePage from 'pages/HomePage/HomePege';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <GlobalStyle />
      {isFetchingUser ? (
        <SpinnerDotted />
      ) : (
        <>
          <AppBar />
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <PhoneBook />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      )}
    </Container>
  );
};
