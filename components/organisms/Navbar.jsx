"use client";

import NavbarLinks from "../molecules/NavbarLinks";
import CustomLink from "../atoms/CustomLink";
import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <nav className='fixed top-0 right-0 flex w-full gap-32 p-8 mt-20 text-lg shadow-2xl bg-zinc-900 -z-10'>
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
      <NavbarLinks caption='Blog'>
        <li>
          <CustomLink href='/latest'>Latest</CustomLink>
        </li>
      </NavbarLinks>
      <NavbarLinks caption='Learn with me'>
        <li className='flex items-center gap-1.5'>
          <Icon icon='devicon:javascript' width='18' />
          <CustomLink href='/category/javascript'>JavaScript</CustomLink>
        </li>
        <li className='flex items-center gap-1.5'>
          <Icon icon='devicon:react' width='18' />
          <CustomLink href='/category/react'>React</CustomLink>
        </li>
        <li className='flex items-center gap-1.5'>
          <Icon icon='devicon:typescript' width='18' />
          <CustomLink href='/category/typescript'>Typescript</CustomLink>
        </li>
        <li className='flex items-center gap-1.5'>
          <Icon icon='vscode-icons:file-type-php3' width='18' />
          <CustomLink href='/category/php'>PHP</CustomLink>
        </li>
      </NavbarLinks>
      <NavbarLinks caption='Socials'></NavbarLinks>
    </nav>
  );
}

export default Navbar;
