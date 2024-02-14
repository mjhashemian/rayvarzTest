import { type RouteObject } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import ProtectedLayout from '../components/layout/ProtectedLayout';
import DashboardLayout from '../components/layout/Dashboard';

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
                // element: <Dashboard />,
              },
              {
                path: 'about',
                // element: <About />,
              },
            ],
          },
        ],
      },
    ],
  },
];
