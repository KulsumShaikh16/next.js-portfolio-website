'use client'
import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'



const About = () => {
  useEffect(() => {
    AOS.init({duration:2000});
  },[]);
  return(
    <div>
      <section className="text-gray-600 body-font bg-pink-100" >
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
   
    <div className="text-center lg:w-2/3 w-full" >
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-700">
        ABOUT ME
      </h1>
      <p className="mb-8 leading-7" data-aos="fade-up">
      Hi, I am <b>Kulsum Shaikh</b>, a dedicated front-end developer with a passion for creating visually stunning and highly functional websites. While I am just starting my professional journey, my enthusiasm for web development drives me to continuously learn and improve my skills every day.
        </p>
        <p className="mb-8 leading-7" data-aos="fade-up">   
           I have a strong foundation in HTML, CSS, and JavaScript, and I am constantly exploring new technologies and frameworks to stay up-to-date with the latest trends in web development. My goal is to build responsive, user-friendly websites that offer a seamless experience across all devices.
       </p>
    
     
    </div>
  </div>
</section>


    </div>
  )
}

export default About
