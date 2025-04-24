import { createBrowserRouter } from 'react-router';

import HomePage from '../pages/HomePage/HomePage';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import VolunteersPage from '../pages/VolunteersPage/VolunteersPage';
import PartnersPage from '../pages/PartnersPage/PartnersPage';
import ActionsPage from '../pages/ActionsPage/ActionsPage';
import MainLayout from '../components/MainLayout/MainLayout';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <HomePage />
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/volunteers",
        element: <VolunteersPage />,
      },
      {
        path: "/partners",
        element: <PartnersPage />,
      },
      {
        path: "/events",
        element: <ActionsPage />,
      },
    ]
  }
]);
