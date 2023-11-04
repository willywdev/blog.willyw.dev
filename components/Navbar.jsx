import ThemedLink from "./ThemedLink";
import { Button } from "./ui/button";
import { X } from "lucide-react";

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
      <nav className='fixed top-0 right-0 w-1/2 h-screen px-10 py-20 text-right border-l bg-zinc-950 border-zinc-700 animate-nav-open'>
        <Button
          variant='outline'
          size='icon'
          aria-label='open navigation menu'
          onClick={() => handleNavbar(false)}
          className='absolute right-4 top-6 '>
          <X />
        </Button>
        <ul className='flex flex-col gap-4 '>
          <li>
            <ThemedLink href='/'>Home</ThemedLink>
          </li>
          <li>
            <ThemedLink href='/about-us'>About Me</ThemedLink>
          </li>
          <li>
            <ThemedLink href='/contact'>Contact</ThemedLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
