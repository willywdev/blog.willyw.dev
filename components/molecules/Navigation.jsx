import HamburgerMenu from "../atoms/HamburgerMenu";

function Navigation() {
  return (
    <nav className='absolute top-8 right-8'>
      <HamburgerMenu />
    </nav>
  );
}

export default Navigation;
