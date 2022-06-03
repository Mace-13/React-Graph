import React from 'react'
import Link from 'next/link';

const About = () => {
  return (
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 lightPink p-8 md:place-items-center">
        <div className="aboutBox w-3/4 h-80 border-solid border-8 border-white drop-shadow-md"></div>
        <div className="flex-col">
          <h1 className="text-3xl font-bold title-font text-color">About Me</h1>
          <p className="text-sm pt-6 pr-11">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus, urna non gravida consectetur, ex dolor dignissim quam, ultrices facilisis nisi erat non nisl. Suspendisse in augue rutrum, faucibus massa ut, fermentum felis. Pellentesque ex nisi, tristique eu tempus quis, vulputate at augue. Vestibulum rhoncus hendrerit purus pulvinar viverra. 
          </p>
          <div className="pt-5">
            <Link href="/contact">
              <span className="myGray inline-block transform cursor-pointer rounded-full px-4 py-1 text-sm text-white transition duration-500  hover:bg-red-300 ">
                En savoir plus
              </span>
            </Link>
          </div>

        </div>
       
      </div>
  )
}

export default About