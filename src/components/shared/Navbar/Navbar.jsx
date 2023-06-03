import React, { useState } from 'react';
import useAuth from '../../../hook/useAuth';
import HostModal from '../../Modals/HostModal';
import Container from '../Container';
import Logo from './Logo';
import MenuDropdown from './MenuDropdown';
import Search from './Search';
import { becomeHost } from '../../../api/auth';

const Navbar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalHandler = (email) => {
    becomeHost(email);
    setIsOpen(false);
  };

  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="border-b-[1px] py-4">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <MenuDropdown openModal={openModal} />
          </div>
        </Container>
      </div>

      {/* Host Modal: Take Opinion */}
      <HostModal
        isOpen={isOpen}
        closeModal={closeModal}
        email={user?.email}
        modalHandler={modalHandler}
      />
    </div>
  );
};

export default Navbar;
