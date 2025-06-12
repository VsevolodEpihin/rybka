import { createBrowserRouter } from 'react-router';

import HomePage from '../pages/HomePage/HomePage';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import VolunteersPage from '../pages/VolunteersPage/VolunteersPage';
import PartnersPage from '../pages/PartnersPage/PartnersPage';
import MainLayout from '../components/MainLayout/MainLayout';
import AuthPage from '../pages/AuthPage/AuthPage';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import EventsPage from '../pages/EventsPage/EventsPage';
import AdminPersonalPage from '../pages/AdminPersonalPage/AdminPersonalPage';
import AdminEventsPage from '../pages/AdminEventsPage/AdminEventsPage';

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
        element: <ProtectedRoute><EventsPage /></ProtectedRoute>,
      },
      {
        path: "/auth",
        element: <AuthPage />
      },
      {
        path: "/profile",
        element: <ProtectedRoute><ProfilePage /></ProtectedRoute>
      },
      {
        path: "/admin/personal",
        element: <ProtectedRoute><AdminPersonalPage /></ProtectedRoute>
      },
      {
        path: "/admin/events",
        element: <ProtectedRoute><AdminEventsPage /></ProtectedRoute>
      },
    ]
  }
]);
