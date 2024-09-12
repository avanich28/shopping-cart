import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Toaster } from 'react-hot-toast';

function AppLayout() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
      <div className="flex h-[100vh] flex-col bg-white dark:bg-stone-800">
        <Header />
        <main className="h-full overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AppLayout;
