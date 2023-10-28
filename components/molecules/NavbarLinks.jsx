import ColoredCaption from "../atoms/ColoredCaption";

function NavbarLinks({ caption, children }) {
  return (
    <div>
      <ColoredCaption>{caption}</ColoredCaption>
      <ul className='flex flex-col items-start justify-start gap-2 mt-2 text-lg'>
        {children}
      </ul>
    </div>
  );
}

export default NavbarLinks;
