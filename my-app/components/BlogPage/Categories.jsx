import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../../services/index';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="text-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-lg sm:text-xl lg:text-2xl text-active mb-6">
        Kategorie
      </h3>
      <div className="flex items-center">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="cursor-pointer mr-6 sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
