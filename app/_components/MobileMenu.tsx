"use client"

import Link from 'next/link'
import { useState } from 'react'
import {HiOutlineMenu} from 'react-icons/hi'
import {IoMdClose} from 'react-icons/io'

let animation = {
  entrance: 'animate-leftSlideIn',
  exit: 'animate-leftSlideOut'
}

type navType = {
  label: string,
  linkTo: string
}

export default function MobileMenu({navValues}: {navValues: navType[]}) {
  const [showMenu, setShowMenu] = useState(false);
  const [activeAnimation, setActiveAnimation] = useState(animation.entrance)

  return (
    <>
      <button 
        className='text-3xl hover:text-blue-600 block md:hidden' 
        onClick={() => {
          setActiveAnimation(animation.entrance);
          setShowMenu(true);
        }}>
        <HiOutlineMenu />
      </button>

      {showMenu && (
        <section 
          className={`bg-white 
          fixed left-0 top-0 h-screen w-screen z-50 
          flex flex-row justify-center items-center ${activeAnimation}`}>
          <button 
            className='absolute right-14 top-10 font-bold text-4xl 
            hover:text-red-500'
            onClick={() => {
              setActiveAnimation(animation.exit);
              setTimeout(() => {
                setShowMenu(false);
              }, 500);
              
            }}  
          >
            <IoMdClose />
          </button>
          
          <nav className="flex flex-col gap-10 text-2xl pb-10 font-semibold ">
            {navValues.map(nav => {
              return (
                <Link 
                  href={`#${nav.linkTo}`} 
                  className="hover:text-blue-600 block md:hidden" 
                  key={nav.linkTo} 
                  onClick={() => setShowMenu(false)}
                >
                  {nav.label}
                </Link>
              )
            })}
          </nav>
        </section>
      )}

    </>
  )
}