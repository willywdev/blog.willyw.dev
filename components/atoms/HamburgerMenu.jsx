"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className='flex flex-col items-end justify-end z-90'>
        <Hamburger
          size={40}
          toggled={isOpen}
          toggle={setOpen}
          rounded
          label='show menu'
          className='z-40'
          style={{ zIndex: 30 }}
        />
      </div>
      {isOpen && (
        <nav className='fixed top-0 right-0 flex flex-col items-center w-1/3 h-full p-4 text-lg -z-10 bg-zinc-900'>
          <ul className='flex flex-col items-center justify-center'>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default HamburgerMenu;
