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
        <h3 className="title-font py-10 text-4xl text-white mx-6">
          “ Don’t listen to what they say, go see ”
        </h3>
      </div>
       
     <Interests />
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}