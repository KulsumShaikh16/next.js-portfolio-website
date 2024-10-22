import React from 'react'
import Link from 'next/link'
import {FaDownload} from 'react-icons/fa';





const Header = () => {
  return (
    
    <header className="text-black-600 body-font bg-slate-500">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-3xl drop-shadow-3xl">K<span className="text-pink-700 text-3xl drop-shadow-2xl">S</span></span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-black justify-center">
      <Link href='/'className="mr-5 hover:text-pink-600 h hover:border-b">Home</Link>
      <Link href='/about'className="mr-5 hover:text-pink-600 hover:border-b">About</Link>
      <Link href='/skills'className="mr-5 hover:text-pink-600 hover:border-b">Skills</Link>
      <Link href='/portfolio'className="mr-5 hover:text-pink-600 hover:border-b">Portfolio</Link>
      <Link href='/contact'className="mr-5 hover:text-pink-600 hover:border-b">Contact</Link>
      
    </nav>
      
      <Link href={'./cv.pdf'} target='_blank'>
    <button className="inline-flex items-center bg-pink-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 transform transition-transform duration-100 hover:scale-100">
      Download CV
    <FaDownload className='ml-2' />
    </button>
    </Link>
  </div>
</header>
  )
}

export default Header
