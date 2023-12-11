import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="min-h-screen bg-amber-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
