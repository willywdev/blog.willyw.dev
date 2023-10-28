"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);
  return <Hamburger toggled={isOpen} toggle={setOpen} />;
}

export default HamburgerMenu;
