import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Logo from '../Shared/Navbar/Logo';
import { GrLogout } from 'react-icons/gr';
import { FcSettings } from 'react-icons/fc';
import { AiOutlineBars } from 'react-icons/ai';
import { BsFillHouseAddFill } from 'react-icons/bs';
const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const [isActive, setActive] = useState('false');
  const navigate = useNavigate();

  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogOut = () => {
    logOut();
    navigate('/');
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="flex justify-between bg-gray-100 text-gray-800 md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:bg-gray-200 focus:outline-none"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`absolute inset-y-0 left-0 z-10 flex w-64 transform flex-col justify-between space-y-6 overflow-x-hidden bg-gray-100 px-2 py-4 md:fixed ${
          isActive && '-translate-x-full'
        }  transition  duration-200 ease-in-out md:translate-x-0`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="mx-auto hidden w-full items-center justify-center bg-rose-100 py-2 md:flex">
              <Logo />
            </div>
            <div className="-mx-2 mt-6 flex flex-col items-center">
              <Link to="/dashboard">
                <img
                  className="mx-2 h-24 w-24 rounded-full object-cover"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="/dashboard">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="mt-6 flex flex-1 flex-col justify-between">
            <nav>
              <>
                <label
                  htmlFor="Toggle3"
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-md px-2 text-gray-800"
                >
                  <input
                    onChange={toggleHandler}
                    id="Toggle3"
                    type="checkbox"
                    className="peer hidden"
                  />
                  <span className="rounded-l-md bg-rose-400 px-4 py-1 peer-checked:bg-gray-300">
                    Guest
                  </span>
                  <span className="rounded-r-md bg-gray-300 px-4 py-1 peer-checked:bg-rose-400">
                    Host
                  </span>
                </label>
                {/* Menu Links */}
                <NavLink
                  to="/dashboard/add-room"
                  className={({ isActive }) =>
                    `mt-5 flex transform items-center px-4  py-2 transition-colors duration-300  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                    }`
                  }
                >
                  <BsFillHouseAddFill className="h-5 w-5" />

                  <span className="mx-4 font-medium">Add Room</span>
                </NavLink>
              </>
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `mt-5 flex transform items-center px-4  py-2 transition-colors duration-300  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            <FcSettings className="h-5 w-5" />

            <span className="mx-4 font-medium">Profile</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="mt-5 flex w-full transform items-center px-4 py-2 text-gray-600   transition-colors duration-300 hover:bg-gray-300 hover:text-gray-700"
          >
            <GrLogout className="h-5 w-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
