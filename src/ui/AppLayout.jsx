import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="flex h-[100vh] flex-col">
      <Header />
      <main className="h-full bg-stone-50">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
