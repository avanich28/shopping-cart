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
import User from './features/authentication/User';
import ResetPassword from './features/authentication/ResetPassword';

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
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/log-in',
        element: <LogIn />,
      },
      {
        path: '/forget-password',
        element: <ForgetPassword />,
      },
      {
        path: '/user',
        element: <User />,
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
