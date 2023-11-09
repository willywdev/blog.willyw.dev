"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import ThemedLink from "./ThemedLink";
import Navbar from "./Navbar";
import NavbarItems from "./NavbarItems";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function handleNavbar() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <header className='flex items-center justify-between w-full h-20 gap-2 px-4 border-b border-zinc-700'>
      <ThemedLink href='/'>
        <h1 className='text-xl'>willyw.dev's Blog</h1>
      </ThemedLink>
      <Button
        variant='outline'
        size='icon'
        aria-label='open navigation menu'
        onClick={handleNavbar}
        className='md:hidden'>
        <Menu />
      </Button>
      {navbarOpen && (
        <Navbar handleNavbar={handleNavbar} className='md:hidden' />
      )}
      <nav className='hidden md:flex'>
        <NavbarItems isDesktop />
      </nav>
    </header>
  );
}

export default Header;
