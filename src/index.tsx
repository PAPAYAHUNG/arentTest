import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { ThemeProvider } from 'styled-components';
import THEME from './constants/theme';
import ErrorBoundary from './components/Vendors/ErrorBoundaries';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
  <ThemeProvider theme={THEME}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </ThemeProvider>
  </Provider>,
);

