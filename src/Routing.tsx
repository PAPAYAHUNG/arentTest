import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import MyRecord from './pages/MyRecord';
import Column from './pages/Column';

export const router = createBrowserRouter([
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
  