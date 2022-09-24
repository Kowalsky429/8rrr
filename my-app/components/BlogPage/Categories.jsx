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
      <h3 className="text-xl font-semibold">Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
