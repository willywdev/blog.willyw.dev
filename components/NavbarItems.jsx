import NavLink from "./NavLink";
import { Home } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Wrench } from "lucide-react";
import { Lightbulb } from "lucide-react";

function NavbarItems({ isDesktop }) {
  return (
    <ul
      className={`flex ${isDesktop ? "" : "flex-col"} gap-2 
        mt-8 md:mt-0 md:gap-5
      `}>
      <NavLink href='/' name='Home'>
        {!isDesktop && <Home size={20} />}
      </NavLink>
      <NavLink href='/learn' name='Learn with me'>
        {!isDesktop && <GraduationCap size={20} />}
      </NavLink>
      <NavLink href='/tools-resources' name='Tools & Resources'>
        {!isDesktop && <Wrench size={20} />}
      </NavLink>
      <NavLink href='/coding-tips' name='Coding Tips'>
        {!isDesktop && <Lightbulb size={20} />}
      </NavLink>
    </ul>
  );
}

export default NavbarItems;
