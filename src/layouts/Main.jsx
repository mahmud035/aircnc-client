import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer';

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pb-20 pt-28">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
