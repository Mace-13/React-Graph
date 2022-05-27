import React from "react";
import Link from "next/link";

const Interests = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8">
        <div className="p-4 flex flex-col items-center justify-center">
            <div className="w-full">
                <img 
                 src="./iconBlog.svg"
                 alt="icon-blog"
                 className="h-80 mx-auto object-contain object-top"   
                />
            </div>
            <div className="pt-5 text-center text-lg font-normal text-gray-700">
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum metus, porta in tortor eu, lacinia finibus dolor. In vehicula, neque et bibendum suscipit</p>
            </div>
            <div className="text-center pt-5">
                <Link href="/blog">
                    <span className="myGray inline-block transform cursor-pointer rounded-full px-6 py-1 text-lg text-white transition duration-500  hover:bg-pink-400 ">
                    Voir les articles
                    </span>
                </Link>
            </div>
        </div>

        <div className="p-4 flex flex-col items-center justify-center">
            <div className="w-full">
                <img 
                 src="./iconFood.svg"
                 alt="icon-blog"
                 className="h-80 mx-auto object-contain object-top"   
                />
            </div>
            <div className="pt-5 text-center text-lg font-normal text-gray-700">
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum metus, porta in tortor eu, lacinia finibus dolor. In vehicula, neque et bibendum suscipit</p>
            </div>
            <div className="text-center pt-5">
                <Link href="/">
                    <span className="myGray inline-block transform cursor-pointer rounded-full px-6 py-1 text-lg text-white transition duration-500  hover:bg-pink-400 ">
                    Voir les articles
                    </span>
                </Link>
            </div>
        </div>
        
        <div className="p-4 flex flex-col items-center justify-center">
            <div className="w-full">
                <img 
                 src="./iconFun.svg"
                 alt="icon-blog"
                 className="h-80 mx-auto object-contain object-top"   
                />
            </div>
            <div className="pt-5 text-center text-lg font-normal text-gray-700">
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum metus, porta in tortor eu, lacinia finibus dolor. In vehicula, neque et bibendum suscipit</p>
            </div>
            <div className="text-center pt-5">
                <Link href="/">
                    <span className="myGray inline-block transform cursor-pointer rounded-full px-6 py-1 text-lg text-white transition duration-500  hover:bg-pink-400 ">
                    Voir les articles
                    </span>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Interests;