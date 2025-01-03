import React from 'react'

export default function AuthoreCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>


 <img
 className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-purple-400'
 src='/images/team.png' alt='logo'/>

 <div>
  <h3 className='text-xl font-bold font-serif'>Emaan Malik </h3>
    <p className='text-gray-500'>
      Fine Arts | Web developer | IT & artificial intelligence Student

    </p>
 </div>
      </div>

      <p className='mt-4 text-black leading-relaxed'>
   Emaan Malik is a passionate and innovative student at the intersection of Fine Arts and Artificial Intelligence,
  where creativity meets cutting-edge technology. With a unique background blending the expressive power of visual
 and performing arts and the precision of AI,  Emaan Malik explores how the fusion of these two fields can redefine 
 the boundaries of art, design, and human interaction.
 Driven by curiosity and a love for experimentation, Emaan Malik delves into projects that range from generative
 art and AI-powered design tools to interactive installations that blur the line between the digital and physical 
 worlds. Through their work, Emaan Malik seeks to challenge conventional narratives, spark meaningful conversations,
 and inspire audiences to envision new possibilities.
      </p>

      <div className='mt-4 flex space-x-3'>
        <a href="https://github.com/Emaanaqeel"
        className='px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-800 transition duration-300 font-bold'>
          GitHub
        </a>

        <a href="https://www.instagram.com/manomalik5568/"
        className='px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-800 transition duration-300 font-bold'>
         Instagram
        </a>

        <a href="#"
        className='px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-800 transition duration-300 font-bold'>
          Linkedin
        </a>
      </div>
      
    </div>
  )
}
