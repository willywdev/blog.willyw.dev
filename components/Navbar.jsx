import { Home } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { PocketKnife } from "lucide-react";
import { Lightbulb } from "lucide-react";
import NavLink from "./NavLink";
import LearnLink from "./LearnLink";

function Navbar({ isMobile }) {
  return (
    <ul className='flex flex-col gap-2 mt-8'>
      <NavLink href='/' name='Home'>
        <Home size={20} />
      </NavLink>
      <li>
        <div className='flex items-center justify-end gap-2 pb-2'>
          <GraduationCap size={20} />
          <div className='flex items-end gap-1'>
            <h2 className='underline underline-offset-2'>Learn with me</h2>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <LearnLink
            href='/javascript'
            name='JavaScript'
            icon='devicon:javascript'
          />
          <LearnLink href='/react' name='React' icon='devicon:react' />
          <LearnLink
            href='/rust'
            name='Rust'
            icon='devicon-plain:rust'
            iconColor='#ce412b'
          />
        </div>
      </li>
      <NavLink href='/tools-resources' name='Tools & Resources'>
        <PocketKnife size={20} />
      </NavLink>
      <NavLink href='/coding-tips' name='Coding Tips'>
        <Lightbulb size={20} />
      </NavLink>
    </ul>
  );
}

export default Navbar;
