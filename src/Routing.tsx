import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MyRecord from './pages/MyRecord';
import Column from './pages/Column';
import ErrorPage from './components/ErrorPage';

export const router = createBrowserRouter([
  { path: '*', element: <ErrorPage /> },
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
