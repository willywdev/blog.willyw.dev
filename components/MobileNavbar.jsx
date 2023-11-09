import { Button } from "./ui/button";
import { X } from "lucide-react";
import Navbar from "./Navbar";
function MobileNavbar({ handleNavbar }) {
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
        <Navbar />
      </nav>
    </div>
  );
}

export default MobileNavbar;
