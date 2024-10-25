'use client'
import { FaCheckCircle } from "react-icons/fa";
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  useEffect (() => {
    AOS.init({duration:2000});
  },[]);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-pink-700">
              MY SKILLS
            </h1>
          </div>

          <div className="flex flex-wrap -m-4 -mt-[4rem]" data-aos="fade-down">
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col" >
                <div className="flex items-center mb-3" >
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0 " >
                    <FaCheckCircle className="text-2xl bg-pink-500" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium" >
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200  rounded-full">
                    <div className="absolute bg-pink-500 h-1 rounded-full w-[100%] "></div>
                    <p className="font-bold text-pink-500 text-right">100 %</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0 ">
                    <FaCheckCircle className="text-2xl bg-pink-500" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-pink-500 h-1 rounded w-[85%]"></div>
                    <p className="font-bold text-pink-500 text-right">85 %</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0 ">
                    <FaCheckCircle className="text-2xl bg-pink-500" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    TYPESCRIPT/JAVASCRIPT
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-pink-500 h-1 rounded w-[60%]"></div>
                    <p className="font-bold text-pink-500 text-right">60 %</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0 ">
                    <FaCheckCircle className="text-2xl bg-pink-500" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    WORDPRESS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-pink-500 h-1 rounded w-[85%]"></div>
                    <p className="font-bold text-pink-500 text-right">85 %</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0 ">
                    <FaCheckCircle className="text-2xl bg-pink-500" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    NODE.JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-pink-500 h-1 rounded w-[40%]"></div>
                    <p className="font-bold text-pink-500 text-right">40 %</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0 ">
                    <FaCheckCircle className="text-2xl bg-pink-500" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    TAILWIND CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-200 rounded-xl">
                    <div className="absolute bg-pink-500 h-1 rounded w-[50%]"></div>
                    <p className="font-bold text-pink-500 text-right">50 %</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
