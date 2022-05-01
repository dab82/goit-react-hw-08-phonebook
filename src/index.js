import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import '../node_modules/modern-normalize/modern-normalize.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './mainstyle/theme';
import { App } from './components/App';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
      <ToastContainer position="top-center" autoClose={3000} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
