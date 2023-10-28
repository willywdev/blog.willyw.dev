import Headline from "../atoms/Headline";
import Subheadline from "../atoms/Subheadline";
import Navigation from "../molecules/Navigation";

function Header() {
  return (
    <header className='flex flex-col items-center justify-center'>
      <Navigation />
      <Subheadline>willyw.dev's</Subheadline>
      <Headline>Blog</Headline>
    </header>
  );
}

export default Header;
