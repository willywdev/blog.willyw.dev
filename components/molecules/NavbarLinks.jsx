import ColoredCaption from "../atoms/ColoredCaption";

function NavbarLinks({ caption, children }) {
  return (
    <nav className='fixed top-0 right-0 flex flex-col w-full p-8 mt-20 text-lg shadow-2xl bg-zinc-900 -z-10'>
      <div>
        <ColoredCaption>{caption}</ColoredCaption>
        <ul className='flex flex-col items-start justify-start gap-2 mt-2 text-lg'>
          {children}
        </ul>
      </div>
    </nav>
  );
}

export default NavbarLinks;
