import { createBrowserRouter } from 'react-router-dom';
import { HomePage, LoginPage, SignUpPage, CategoryPage } from '@pages/index';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      { path: 'login', element: <LoginPage /> },
      { path: 'signUp', element: <SignUpPage /> },
      { path: 'category', element: <CategoryPage /> },
    ],
  },
]);
