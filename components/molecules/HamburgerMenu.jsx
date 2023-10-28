"use client";

import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { useRef } from "react";
import NavbarLinks from "./NavbarLinks";
import CustomLink from "../atoms/CustomLink";

function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div ref={parent} className='overflow-hidden'>
      <div className='z-20 flex flex-col items-end justify-end'>
        <Hamburger
          size={40}
          toggled={isOpen}
          toggle={setOpen}
          rounded
          label='show menu'
        />
      </div>
      {isOpen && (
        <NavbarLinks caption='Links'>
          <li>
            <CustomLink href='/'>Home</CustomLink>
          </li>
          <li>
            <CustomLink href='https://willyw.dev' target='_blank'>
              Portfolio
            </CustomLink>
          </li>
        </NavbarLinks>
      )}
    </div>
  );
}

export default HamburgerMenu;
