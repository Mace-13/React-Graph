import Head from "next/head";
import Link from "next/link";
import { Interests, About } from '../sections';


export default function Home() {
  return (
    <div>
      <Head>
        <title>React Graphql Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="homepage mb-10 flex justify-center shadow-md">
        <video autoPlay loop id="homepage">
          <source src="./homepage.mp4" type="video/mp4" />
        </video>
        < button className="absolute bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <Interests />
      <About />
    </div>
  );
}

