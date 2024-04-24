import { Outlet } from 'react-router-dom';
import Header from './Header';

function AppLayout() {
  return (
    <div className="flex h-[100vh] flex-col">
      <Header />
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
