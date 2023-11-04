import Link from "next/link";

function ThemedLink({ href, children }) {
  return (
    <Link href={href} className='hover:text-zinc-200'>
      {children}
    </Link>
  );
}

export default ThemedLink;
