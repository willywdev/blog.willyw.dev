import Link from "next/link";

function CustomLink({ children, href, target }) {
  return (
    <Link href={href} className='hover:text-sky-300 ' target={target}>
      {children}
    </Link>
  );
}

export default CustomLink;
