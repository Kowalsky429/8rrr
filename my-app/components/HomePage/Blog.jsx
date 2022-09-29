import React, { useState, useEffect } from 'react';
import { BlogPost } from '../BlogPage/index';
import { getRecentPosts } from '../../services';

const Blog = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    getRecentPosts().then((result) => setRecentPosts(result));
  }, []);

  return (
    <section id="blog" className="max-w-[1400px] mx-auto px-5 py-6">
      <h3 className="relative text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium z-10 mb-12 lg:mb-24">
        Blog
        <div className="absolute top-[40%] left-[50%] -translate-y-1/2 w-[50px] h-[120%] -z-10 bg-white bg-opacity-10 rounded-lg md:w-[80px] lg:w-[80px]" />
      </h3>
      <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6 lg:mb-8">
        Moje ostatnie przemyślenia...
      </h4>
      <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 mb-12 lg:mb-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec massa
        venenatis in laoreet. Nunc nisl egestas adipiscing pellentesque congue
        venenatis. Aenean est dolor tincidunt eu, lacus ut ullamcorper. Mauris
        nisl nibh suspendisse eu sagittis. Adipiscing lobortis tristique in
        purus, id sapien suspendisse vulputate. Ut est eget commodo, nisi
        fringilla. Fermentum sed tempus, ut accumsan aenean ipsum magna
        tristique neque.
      </p>
      <article>
        {recentPosts.map((post, index) => (
          <BlogPost post={post} key={index} />
        ))}
      </article>
    </section>
  );
};

export default Blog;
