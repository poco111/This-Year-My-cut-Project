import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from '@styles/GlobalStyle';
import { router } from '@constants/routes';
import { UserContextProvider } from '@stores/UserContext';
const App = () => {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </>
  );
};

export default App;
