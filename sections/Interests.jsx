import React from 'react'
import Link from 'next/link';

const Interests = () => {
  return (
    <div class="mx-24 grid grid-cols-1 gap-20 pb-12 md:grid-cols-3 lg:grid-cols-3 lg:gap-20">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <img
              src="./iconBlog.svg"
              alt="icon-blog"
              className="mx-auto h-40 object-contain object-top"
            />
          </div>
          <div className="pt-5 text-center font-normal text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ipsum metus, porta in tortor eu, lacinia finibus dolor. In
              vehicula, neque et bibendum suscipit
            </p>
          </div>
          <div className="pt-5 text-center">
            <Link href="/blog">
              <span className="myGray inline-block transform cursor-pointer rounded-full px-6 py-1 text-base text-white transition duration-500  hover:bg-red-300 ">
                Voir les articles
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <div className="w-full">
            <img
              src="./iconFood.svg"
              alt="icon-blog"
              className="mx-auto h-40 object-contain object-top"
            />
          </div>
          <div className="pt-5 text-center font-normal text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ipsum metus, porta in tortor eu, lacinia finibus dolor. In
              vehicula, neque et bibendum suscipit
            </p>
          </div>
          <div className="pt-5 text-center">
            <Link href="/">
              <span className="myGray inline-block transform cursor-pointer rounded-full px-6 py-1 text-base text-white transition duration-500  hover:bg-red-300 ">
                Voir les articles
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <img
              src="./iconFun.svg"
              alt="icon-blog"
              className="mx-auto h-40 object-contain object-top"
            />
          </div>
          <div className="pt-5 text-center font-normal text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ipsum metus, porta in tortor eu, lacinia finibus dolor. In
              vehicula, neque et bibendum suscipit
            </p>
          </div>
          <div className="pt-5 text-center">
            <Link href="/">
              <span className="myGray inline-block transform cursor-pointer rounded-full px-6 py-1 text-base text-white transition duration-500  hover:bg-red-300 ">
                Voir les articles
              </span>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Interests