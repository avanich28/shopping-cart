import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Cookies from 'js-cookie';
import store from './store';

import { SearchProvider } from './contexts/searchContext';
import { ThemeProvider } from './contexts/ThemeContext';

import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import ProtectedRoute from './ui/ProtectedRoute';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import SignUp from './features/authentication/SignUp';
import Cart from './pages/Cart';
import OrderForm from './features/order/OrderForm';
import LogIn from './features/authentication/LogIn';
// import ForgetPassword from './features/authentication/ForgetPassword';
// import ResetPassword from './features/authentication/ResetPassword';
import Me from './features/user/Me';
import Delivery from './features/user/Delivery';
import Setting from './features/user/Setting';

const queryClient = new QueryClient();

const token = Cookies.get('token');
const totalItems = store.getState().cart.cart.length > 0;

const getAccessToken = () => token;
const getAccessToken2 = () => token && totalItems;
const isAuthenticated = () => getAccessToken();
const isAuthenticated2 = () => getAccessToken2();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        element: <ProtectedRoute isAuthenticated={!token} />,
        children: [
          {
            path: '/users/sign-up',
            element: <SignUp />,
          },
          {
            path: '/users/log-in',
            element: <LogIn />,
          },
          // {
          //   path: '/users/forget-password',
          //   element: <ForgetPassword />,
          // },
          // {
          //   path: '/users/reset-password/:token',
          //   element: <ResetPassword />,
          // },
        ],
      },
      {
        element: <ProtectedRoute isAuthenticated={() => isAuthenticated()} />,
        children: [
          {
            path: '/users/me',
            element: <Me />,
            children: [
              {
                index: true,
                element: <Navigate to="/users/me/delivery" replace />,
              },
              {
                path: '/users/me/delivery',
                element: <Delivery />,
              },
              {
                path: '/users/me/setting',
                element: <Setting />,
              },
            ],
          },
        ],
      },
      {
        element: <ProtectedRoute isAuthenticated={() => isAuthenticated2()} />,
        children: [
          {
            path: '/order',
            element: <OrderForm />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
