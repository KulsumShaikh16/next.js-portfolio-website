import Link from 'next/link';

import { FaLinkedin,FaGithub} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=' bg-slate-400'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span className="ml-3 text-xl">KS</span>
    </a>
    <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 mt-4">© 2024 KULSUM SHAIKH —
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      <Link href={'https://www.linkedin.com/in/kulsum-shaikh-725ab22a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} target='_blank'><FaLinkedin className='mr-3 text-2xl hover:text-blue-400'  /> </Link>
      <Link href={'https://github.com/KulsumShaikh16'} target='_blank'> <FaGithub className='mr-3 text-2xl hover:text-black' /> </Link>
      <Link href={'mailto:kulsumshaikh1605@gmail.com'} target='_blank'><MdEmail className='mr-3 text-2xl hover:text-red-700' /> </Link>
      
      
     
      
     

    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer
