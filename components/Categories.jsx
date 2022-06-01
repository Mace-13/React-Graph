import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => {setCategories(newCategories)}
      );
  }, []);

  console.log(categories)

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4 text-color'>Categories</h3>
        
      {categories.map((category) => (
        <div key={category.name} className='flex items-center w-full mb-4'>
          <div className="w-16 flex-none">
            <img src={category.image.url} alt={category.name} height="60px" width="60px" className="align-middle rounded-full" />
          </div>
          <div className="flex-grow ml-4 ">
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='cursor-pointer block hover:text-red-300'>
                {category.name}
              </span>
            </Link>
          </div>

        </div>
      ))}

    </div>
  )
}

export default Categories

