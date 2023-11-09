import ThemedLink from "./ThemedLink";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Home } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { PocketKnife } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Icon } from "@iconify/react";

function Navbar({ handleNavbar }) {
  function handleOuterClick(event) {
    if (event.target === event.currentTarget) {
      handleNavbar(false);
    }
  }

  return (
    <div
      className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm bg-blend-darken'
      onClick={handleOuterClick}>
      <nav className='fixed top-0 right-0 w-3/4 h-screen px-10 py-20 text-right border-l bg-zinc-950 border-zinc-700 animate-nav-open'>
        <Button
          variant='outline'
          size='icon'
          aria-label='open navigation menu'
          onClick={() => handleNavbar(false)}
          className='absolute right-4 top-6 '>
          <X />
        </Button>
        <ul className='flex flex-col gap-4 mt-8'>
          <NavLink href='/' name='Home'>
            <Home size={20} />
          </NavLink>
          <li>
            <div className='flex items-center justify-end gap-2 pb-2'>
              <GraduationCap size={20} />
              <div className='flex items-end gap-1'>
                <h2>Learn with me</h2>
                <ChevronDown size={14} />
              </div>
            </div>

            <LearnLink href='/react' name='React' icon='devicon:react' />

            <div
              aria-label='Border Bottom'
              className='w-3/4 h-2 ml-auto border-b-2 border-dashed opacity-50'></div>
          </li>
          <NavLink href='/tools-resources' name='Tools & Resources'>
            <PocketKnife size={20} />
          </NavLink>
          <NavLink href='/coding-tips' name='Coding Tips'>
            <Lightbulb size={20} />
          </NavLink>
        </ul>
        {/* <section>Blog by AVATAR willywdev</section> */}
      </nav>
    </div>
  );
}

function NavLink({ href, name, children }) {
  return (
    <li>
      <div className='flex items-center justify-end gap-2 pb-2'>
        {children}
        <ThemedLink href={href}>{name}</ThemedLink>
      </div>
      <div
        aria-label='Border Bottom'
        className='w-3/4 h-2 ml-auto border-b-2 border-dashed opacity-50'></div>
    </li>
  );
}

function LearnLink({ href, name, icon }) {
  return (
    <div className='flex flex-col items-end gap-1'>
      <div className='flex items-center gap-1'>
        <Icon icon={icon} />
        <ThemedLink href={href}>{name}</ThemedLink>
      </div>
    </div>
  );
}
export default Navbar;
