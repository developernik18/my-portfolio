import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="bg-white py-5 px-5 md:px-10 flex flex-row justify-between">
      <div className=" text-xl font-bold">
        Nikhil Kumar
      </div>

      <nav className="flex flex-row gap-5 text-lg font-semibold ">
        <Link href={'#hero'} className="hover:text-blue-600">
          Home
        </Link>
        
        <Link href={'#about'} className="hover:text-blue-600">
          About
        </Link>
        
        <Link href={'#project'} className="hover:text-blue-600">
          Project
        </Link>
        
        <Link href={'#contact'} className="hover:text-blue-600">
          Contact
        </Link>

        <MobileMenu />
      </nav>
    </header>
  )
}