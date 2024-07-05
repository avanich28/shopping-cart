import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import SignUp from './features/authentication/SignUp';
import ErrorFallBack from './ui/ErrorFallBack';
import { SearchProvider } from './contexts/searchContext';
import Cart from './pages/Cart';
import OrderForm from './features/order/OrderForm';
import LogIn from './features/authentication/LogIn';
import ForgetPassword from './features/authentication/ForgetPassword';
import ResetPassword from './features/authentication/ResetPassword';
import Me from './features/user/Me';
import Delivery from './features/user/Delivery';
import Setting from './features/user/Setting';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: <ErrorFallBack />,
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
        path: '/order',
        element: <OrderForm />,
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
        path: '/users/sign-up',
        element: <SignUp />,
      },
      {
        path: '/users/log-in',
        element: <LogIn />,
      },
      {
        path: '/users/forget-password',
        element: <ForgetPassword />,
      },
      {
        path: '/users/reset-password/:token',
        element: <ResetPassword />,
      },
      {
        path: '/users/me',
        element: <Me />,
        children: [
          {
            path: '/users/me',
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
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;
