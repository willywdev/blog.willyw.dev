import ThemedLink from "./ThemedLink";

function NavLink({ href, name, children }) {
  return (
    <li>
      <div className='flex items-center justify-end gap-2'>
        {children}
        <ThemedLink href={href}>
          <span className='align-middle'>{name}</span>
        </ThemedLink>
      </div>
    </li>
  );
}

export default NavLink;
