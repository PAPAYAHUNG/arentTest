import React from 'react';
import './App.css';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyRecord from './pages/MyRecord';
import Column from './pages/Column';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/myRecord',
    element: <MyRecord />,
  },
  {
    path: '/column',
    element: <Column />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
