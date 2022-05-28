import Head from "next/head";
import Link from "next/link";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import { Interests, About } from "../sections";

export default function Home({ posts }) {
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
      </div>

      <div class="grid grid-cols-1 gap-20 md:grid-cols-3 lg:grid-cols-3 lg:gap-20 mx-24 pb-12">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <img
              src="./iconBlog.svg"
              alt="icon-blog"
              className="mx-auto h-60 object-contain object-top"
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
              className="mx-auto h-60 object-contain object-top"
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
              className="mx-auto h-60 object-contain object-top"
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
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
