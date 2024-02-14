import { type RouteObject } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import ProtectedLayout from '../components/layout/ProtectedLayout';
import DashboardLayout from '../components/layout/Dashboard';
import Houses from '../pages/houses/Houses';
import About from '../pages/about/About';
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <ProtectedLayout />,
        children: [
          {
            path: '/',
            element: <DashboardLayout />,
            children: [
              {
                index: true,
                path: 'houses',
                element: <Houses />,
              },
              {
                path: 'about',
                element: <About />,
              },
            ],
          },
        ],
      },
    ],
  },
];
