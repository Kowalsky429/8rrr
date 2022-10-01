import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../../services/index';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="mb-12 px-5 lg:px-0">
      <h5 className="text-left mb-6">Kategorie</h5>
      <div className="flex items-center">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <p className="cursor-pointer mr-6 hover:text-light">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
