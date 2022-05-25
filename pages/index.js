import Head from 'next/head'
import Link from 'next/link';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections';

export default function Home({ posts}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>React Graphql Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto homebg rounded-xl shadow-md overflow-hidden mb-10 flex items-center justify-center">
        <div className="homeBox shadow-lg rounded-lg p-10 max-w-md">
          <h3 className='mb-5 text-1xl font-semibold'>
            Hello Traveler !
          </h3>
          <p className='text-white mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non lacinia eros. Maecenas ut tempor elit, vitae mollis quam. In semper sem ut eros faucibus, eu rhoncus mi suscipit. Nunc faucibus aliquam nunc, sed bibendum leo suscipit semper. Pellentesque euismod mauris sed tincidunt vehicula. Fusce fringilla, velit et fermentum ullamcorper.</p>
          <div className='text-center'>
            <Link href="">
              <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-red-200 text-sm font-medium rounded-full text-stone-500 px-4 py-2 cursor-pointer'>
                Voir les articles
              </span>
            </Link>
          </div>
        </div>
      </div>
     
      <FeaturedPosts />
    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [] ;
  return {
    props: { posts },
  };
}
