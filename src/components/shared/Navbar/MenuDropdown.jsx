import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { becomeHost } from '../../../api/auth';
import useAuth from '../../../hook/useAuth';
import Avatar from './Avatar';

const MenuDropdown = ({ openModal }) => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // console.log(user);

  // NOTE: Here useCallback() hook is used for performance improvement.
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleLogout = () => {
    logOut().then(() => {
      navigate('/login');
    });
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Aircnc btn: NOTE: If a logged in user clicked this button, he/she will become a 'host' and can add room. */}
        <div
          onClick={openModal}
          className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block"
        >
          AirCNC your home
        </div>
        {/* Dropdown btn  */}
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {/* Conditionally show Dropdown content */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            {/* Conditionally show login / logout btn */}
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-3 font-semibold transition hover:bg-neutral-100"
                >
                  Dashboard
                </Link>

                <div
                  onClick={handleLogout}
                  className="cursor-pointer px-4 py-3 font-semibold transition hover:bg-neutral-100"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 font-semibold transition hover:bg-neutral-100"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-3 font-semibold transition hover:bg-neutral-100"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
