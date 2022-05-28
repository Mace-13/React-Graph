import React, {useEffect, useState } from 'react'
import Link from 'next/link';

import { getNavs } from '../services';

const Header = () => {
    let [open, setopen] = useState(false)

  return (
    <nav className="flex items-center justify-between pt-5 lightPink">
         <img src={open ? "./icon-close.svg" : "./icon-hamburger.svg"} className="md:hidden  fixed right-5 cursor-pointer z-20 top-6" onClick={() => setopen(!open)} />
         <div className='md:float-left block px-20 pb-10'>
           <a href="/" className="">
               <img src="./logoBlog.svg" className="mr-3 w-24 h-24" alt="Ohayo Logo" />
            </a>
         </div>
         
         

         <ul className={`bg-[#ffffff14] backdrop-blur-md  md:pl-10 pr-28 md:static pb-5 fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${!open ? 'right-[-100%] ' : 'right-0'}`}>
            <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-red-300 duration-300">
               <Link href="/">
                  <a className="cursor-pointer text-color text-lg inline-block md:py-5 py-3 ">Home</a>
               </Link>        
            </li>
            <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-red-300 duration-300">
               <Link href="/blog">
                  <a className="cursor-pointer text-color text-lg inline-block md:py-5 py-3 ">Blog</a>
               </Link>        
            </li>
            <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-red-300 duration-300">
               <Link href="/">
                  <a className="cursor-pointer text-color text-lg inline-block md:py-5 py-3 ">Galerie</a>
               </Link>        
            </li>
            <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-red-300 duration-300">
               <Link href="/">
                  <a className="cursor-pointer text-color text-lg inline-block md:py-5 py-3 ">Contact</a>
               </Link>        
            </li>
             
         </ul>
      </nav>
  )
}

export default Header