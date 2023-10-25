import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navValues = [{
  label: 'Home',
  linkTo: 'hero'
},{
  label: 'About',
  linkTo: 'about'
},{
  label: 'Projects',
  linkTo: 'projects'
},{
  label: 'Contact',
  linkTo: 'contact'
}]

export default function Header() {
  return (
    <header className="bg-white py-5 px-5 md:px-10 flex flex-row justify-between">
      <div className=" text-xl font-bold">
        Nikhil Kumar
      </div>

      <nav className="flex flex-row gap-5 text-lg font-semibold ">
        {navValues.map(nav => {
          return (
            <Link 
              href={`#${nav.linkTo}`} 
              className="hover:text-blue-600 hidden md:block" 
              key={nav.linkTo} 
            >
              {nav.label}
            </Link>
          )
        })}

        <MobileMenu navValues={navValues}/>
      </nav>
    </header>
  )
}