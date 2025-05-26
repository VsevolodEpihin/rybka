import { createBrowserRouter } from 'react-router';

import HomePage from '../pages/HomePage/HomePage';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import VolunteersPage from '../pages/VolunteersPage/VolunteersPage';
import PartnersPage from '../pages/PartnersPage/PartnersPage';
import ActionsPage from '../pages/ActionsPage/ActionsPage';
import MainLayout from '../components/MainLayout/MainLayout';
import AuthPage from '../pages/AuthPage/AuthPage';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import ProfilePage from '../pages/ProfilePage/ProfilePage';

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
        element: <ProtectedRoute><VolunteersPage /></ProtectedRoute>,
      },
      {
        path: "/partners",
        element: <ProtectedRoute><PartnersPage /></ProtectedRoute>,
      },
      {
        path: "/events",
        element: <ProtectedRoute><ActionsPage /></ProtectedRoute>,
      },
      {
        path: "/auth",
        element: <AuthPage />
      },
      {
        path: "/profile",
        element: <ProtectedRoute><ProfilePage /></ProtectedRoute>
      }
    ]
  }
]);
