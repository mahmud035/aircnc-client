import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';

const Main = () => {
  return (
    <div className="text-red-500">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
