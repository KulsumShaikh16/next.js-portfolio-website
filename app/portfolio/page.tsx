'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Portfolio = () => {
 useEffect (() => {
    AOS.init({duration:4000});
  },[]);
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-pink-600">
        MY PROJECTS
      </h1>
      <p className="lg:w-2/3 mx-auto leading-7 text-base" data-aos="fade-up">
      This section showcases a selection of my recent projects, demonstrating my skills in Front-End Development. Each project reflects my commitment to delivering high-quality solutions and creative problem-solving. From building dynamic web applications to solving real-world problems through innovative design and development, these projects represent my ability to turn ideas into functional, user-centered products.

Feel free to explore the details of each project, including the technologies used, challenges faced, and the impact of the final product, these projects exhibit my adaptability and passion for building engaging digital experiences.


      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
        
          <Image
            alt="pass-generator"
            className="absolute inset-0 w-full h-full object-fit "  data-aos="flip-right"
            src={require("../../public/pass-gen.png")}
            width={600}
            height={300}

            />
            
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
              Random Password Generator Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Password Generator
            </h1>
            <p className="leading-relaxed line-clamp-2">
            The Random Password Generator is a web application built using HTML, CSS, and JavaScript that allows users to create secure, randomized passwords based on their preferences. The tool helps generate strong passwords by including options to customize the length and include special characters, numbers, uppercase, and lowercase letters, ensuring a high level of security.
            </p>
            <Link href={"https:random-password-generate-sepia.vercel.app"} target='_blank'>


            <p className="leading-relaxed text-pink-700 hover:underline">
             View Project
            </p>
            </Link>
          </div>
     
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-fit"  data-aos="flip-right"
            src={require("../../public/dynamic resume.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
              Dynamic Resume Builder
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             Resume Builder
            </h1>
            <p className="leading-relaxed line-clamp-2">
            The Dynamic Resume Builder is a web application developed using HTML, CSS, JavaScript, and TypeScript that enables users to create professional, personalized resumes with ease. This app provides an interactive and dynamic interface for users to input their personal details, skills, experience, and education, and generate a well-formatted resume in real-time.
            </p>
            <Link href={"https:dynamic-resume-16.vercel.app"} target='_blank'>


<p className="leading-relaxed text-pink-700 hover:underline">
 View Project
</p>
</Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-fit"  data-aos="flip-right"
            src={require("../../public/portfolio-website .png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
              Portfolio Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Responsive Portfolio
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This Portfolio Website is a personal project built using HTML, CSS, and JavaScript to showcase my skills, projects, and professional journey. The website serves as a digital portfolio, designed to highlight my work in web development and related technologies, with a modern, responsive design that adapts to various devices and screen sizes.
            </p>
            <Link href={"https:portfolio-website-kulsumshaikh.vercel.app"} target='_blank'>


<p className="leading-relaxed text-pink-700 hover:underline">
 View Project
</p>
</Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-fit"  data-aos="flip-right"
            src={require("../../public/calculator.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
              Digital Calculator Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Digital Calculator
            </h1>
            <p className="leading-relaxed line-clamp-2">
            The Digital Calculator App is a simple, yet fully functional calculator built using HTML, CSS, and JavaScript. Designed to perform basic arithmetic operations, the app provides a user-friendly interface for quick and accurate calculations.
            </p>
            <Link href={"https:digital-calculator-aad2.vercel.app"} target='_blank'>


<p className="leading-relaxed text-pink-700 hover:underline">
 View Project
</p>
</Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-fit"  data-aos="flip-right"
            src={require("../../public/tech force.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
              Educational Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Tech Force Pakistan
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This project demonstrates my ability to build an educational platform that combines a clean design with interactive, content-rich features, showcasing my expertise in front-end web development.

.
            </p>

             <Link href="https://github.com/KulsumShaikh16/tech-force-website.git" target='_blank'>


            <p className="leading-relaxed text-pink-700 hover:underline">
             View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-fit"  data-aos="flip-right"
            src={require("../../public/legal.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-pink-500 mb-1">
              Legal Advisory Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              legal Aid Agency
            </h1>
            <p className="leading-relaxed line-clamp-2">
            The Legal Advisory Website is a professional platform developed using HTML and CSS, aimed at providing legal information, resources, and services to clients. Designed for law firms or individual legal advisors, the website offers a clean and organized interface for users to explore legal topics, request consultations, and access expert advice on various legal matters.
            </p>
             <Link href="https://github.com/KulsumShaikh16/legal-Advisory-main.git" target='_blank'>


            <p className="leading-relaxed text-pink-700 hover:underline">
             View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Portfolio
