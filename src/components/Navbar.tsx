'use client'

import { headers } from 'next/headers';
 import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
const [currentDateTime, setCurrentDateTime] = useState(``);
useEffect(()=>{
  const updateDateTime =() =>{
    const now = new Date();
    const  options: Intl.DateTimeFormatOptions ={
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }
    setCurrentDateTime(now.toLocaleDateString('en-US', options) +
    '' +  now.toLocaleTimeString ('en-US', {hour12 : false})   
  )
  }

  updateDateTime();
  const interVALID = setInterval(updateDateTime,1000);
  return () => clearInterval(interVALID)
}, [])




  return (
    <header className='text-gray-500 body-font shadow-lg '>
    <div className='container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center '>
      <div className='flex-1 text-black font-mono font-semibold'>
        <span>
          {currentDateTime}
        </span>
      </div>

<nav className='md:ml-auto flex flex-wrap items-center text-black justify-center'>

  <Link href="/" className='mr-5 hover:text-purple-600 transition-colors duration-300 hover:scale-110'>Home</Link>

  <Link href="/About" className='mr-5 hover:text-purple-700 transition-colors duration-300 hover:scale-110'>About</Link>
  <Link href="/Blog" className='mr-5 hover:text-purple-700 transition-colors duration-300 hover:scale-110'>Blog</Link>
  <Link href="/Contact" className='mr-5 hover:text-purple-700 transition-colors duration-300 hover:scale-110'>Contact</Link>

</nav>
<Link href= "https://github.com/Emaanaqeel">
<button className='inline-flex items-center bg-purple-600 text-white font-semibold border-0 py-1 px-3 focus:outline-none hover:bg-purple-800
rounded mt-4 md:mt-0 transition-colors duration-300' >
 GitHub 

 <FaArrowRight className='mx-2'/>
</button>
</Link>







    </div>
    </header>

  )
}
