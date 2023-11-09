import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

function Footer() {
  return (
    <footer className='flex items-center justify-between p-3 mt-10 border-t border-zinc-700'>
      <p className='flex items-center w-3/4 gap-4 pt-2 text-sm opacity-75'>
        <Image
          src='/avatar.jpeg'
          width={40}
          height={40}
          alt='Avatar'
          className='rounded-full outline-dotted outline-2 outline-zinc-700'
        />
        Crafted with a sprinkle of code by willywdev - where bugs are just
        unexpected features!
      </p>
      <Button variant='outline' size='icon' aria-label='open github profile'>
        <Link href='https://github.com/willywdev' target='_blank'>
          <Github size={20} />
        </Link>
      </Button>
    </footer>
  );
}

export default Footer;
