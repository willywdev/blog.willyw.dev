import Headline from "../atoms/Headline";
import Subheadline from "../atoms/Subheadline";

function Header() {
  return (
    <header className='flex flex-col items-center justify-center'>
      <Subheadline>willyw.dev's</Subheadline>
      <Headline>Blog</Headline>
    </header>
  );
}

export default Header;
