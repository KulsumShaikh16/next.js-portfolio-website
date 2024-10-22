'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Contact = () => {
 useEffect (() => {
    AOS.init({duration:2000});
  },[]);
  return (
    <div>
      

      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-pink-700">
        Contact Me
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">
        Feel Free to Contact
      </p>
    </div>
    
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">

      <form  action="https://formspree.io/f/mrbgbqry" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
  method="POST">
        <div className="p-2 w-1/2">
        

      
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-black ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-[40rem] bg-pink-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-[40rem] bg-pink-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black"
           >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-[40rem] bg-pink-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            required/>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-pink-700 border-0 py-2 px-8 focus:outline-none hover:bg-pink-500 rounded text-lg transform transition-transform duration-300 hover:scale-105" >           SEND
          </button>
        </div>
          </form>
        
      </div>
    </div>
  </div>
</section>

     
    </div>
  )
}

export default Contact
