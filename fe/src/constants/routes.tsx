import { createBrowserRouter } from 'react-router-dom';
import {
  MoodPage,
  HomePage,
  LoginPage,
  SignUpPage,
  CategoryPage,
  MyPage,
  FormPage,
  BlankMyPage,
} from '@pages/index';

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
      { path: 'myPage', element: <MyPage /> },
      { path: 'form', element: <FormPage /> },
      { path: 'mood', element: <MoodPage /> },
      { path: 'blankMyPage', element: <BlankMyPage /> },
    ],
  },
]);
