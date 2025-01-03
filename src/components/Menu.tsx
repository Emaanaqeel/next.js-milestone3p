import React from 'react'

export default function photo() {
  return (
    

    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
      Engaging Content
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
      Our blog delivers well-researched, insightful, and engaging articles that keep you informed and entertained.
      Read on the go with a fully responsive website that looks great on any device.
      </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/images/menu1.jpeg"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/images/menu2.jpeg"
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="/images/menu3.jpeg"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img
            alt="gallery"
            className="w-full h-full object-cover object-center block"
            src="/images/menu4.jpeg"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/images/menu5.jpeg"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block"
            src="/images/menu6.jpeg"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
