import Headline from "../atoms/Headline";
import HamburgerMenu from "../molecules/HamburgerMenu";

function Header() {
  return (
    <header className='flex items-center justify-between h-20 px-4'>
      <Headline>willyw.dev's Blog</Headline>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
