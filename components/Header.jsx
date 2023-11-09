"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import ThemedLink from "./ThemedLink";
import MobileNavbar from "./MobileNavbar";

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
        onClick={handleNavbar}>
        <Menu />
      </Button>
      {navbarOpen && <MobileNavbar handleNavbar={handleNavbar} />}
    </header>
  );
}

export default Header;
