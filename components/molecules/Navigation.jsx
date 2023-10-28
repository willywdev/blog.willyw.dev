import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

function Navigation() {
  return (
    <Menu>
      <Link href=''>Home</Link>
      <Link href=''>Socials</Link>
      <Link href=''>Topics</Link>
      <Link href=''>Portfolio</Link>
    </Menu>
  );
}

export default Navigation;
