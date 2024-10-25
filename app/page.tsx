'use client'

import Image from 'next/image'

import Typewriter from 'typewriter-effect';
import Portfolio from './portfolio/page';
import Contact from '../app/contact/page'
import About from './about/page';
import Skills from './skills/page';
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {
  useEffect (() => {
    AOS.init({duration:2000});
  },[]);
  return (
    <div>

    
      <section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-400">
        I am
        <br className="hidden lg:inline-block" />
       <span className='text-pink-700'>
        <Typewriter
  options={{
    strings: ['Front-End Developer', 'WordPress Developer'],
    autoStart: true,
    loop: true,
  }}
  
/>
</span>
      </h1>
      <p className="mb-8 leading-7 w-full text-gray-600 ">
      Highly motivated and enthusiastic front-end developer with a strong desire to learn and grow in the field. Proficient in HTML, CSS, and JavaScript, with a solid understanding of front-end development principles and best practices. Looking for an opportunity to apply my skills and knowledge in a real-world setting and continue developing my skills as a front-end developer
      </p>
      <div className="flex justify-center">
        <Link href={"https://wa.me/03353200000"} target='_blank'>
        <button className="inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg transform transition-transform duration-300 hover:scale-105">
    
          Contact 
        </button>
        </Link>
        <Link href={'mailto:kulsumshaikh1605@gmail.com'} target='_blank'>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-pink-100 hover:border-pink-600 rounded text-lg transform transition-transform duration-300 hover:scale-105">

          Email
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded mx-auto w-[30rem] flip-right" data-aos="fade-up-left" 
        
        alt="hero"
        width={500}
        height={500}
        src={"/background.jpg"}
      />
    </div>
  </div>
</section>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
     
    </div>
  )

}
export default Hero
