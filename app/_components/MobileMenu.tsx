"use client"

import Link from 'next/link'
import { useState } from 'react'
import {HiOutlineMenu} from 'react-icons/hi'
import {IoMdClose} from 'react-icons/io'

let animation = {
  entrance: 'animate-leftSlideIn',
  exit: 'animate-leftSlideOut'
}

export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeAnimation, setActiveAnimation] = useState(animation.entrance)
  
  return (
    <>
      <button 
        className='text-xl hover:text-blue-600' 
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
          </nav>
        </section>
      )}

    </>
  )
}