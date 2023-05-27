import React from 'react';
import Container from '../Container';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="border-b-[1px] py-4">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <div>search</div>
            <div>menu</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
