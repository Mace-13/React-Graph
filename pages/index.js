import Head from "next/head";
import Link from "next/link";
import { useRef } from 'react';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

export default function Home() {

  const scrollRef = useRef(null)
  const executeScroll = () => scrollToRef(scrollRef)
  return (
    <div>
      <Head>
        <title>React Graphql Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="homebg mb-10 flex justify-center shadow-md">
        <h3 className="title-font mx-6 py-10 text-4xl text-white">
          “ Don’t listen to what they say, go see ”
        </h3>
        < button className="absolute bottom-0" onclick={executeScroll}>
          <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div class="mx-24 grid grid-cols-1 gap-20 pb-12 md:grid-cols-3 lg:grid-cols-3 lg:gap-20">
        <div className="flex flex-col items-center justify-center" ref={scrollRef}>
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

    </div>
  );
}

