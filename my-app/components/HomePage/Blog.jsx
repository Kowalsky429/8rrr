import React, { useState, useEffect } from 'react';
import { BlogPost } from '../BlogPage/index';
import { getRecentPosts } from '../../services';

const Blog = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    getRecentPosts().then((result) => setRecentPosts(result));
  }, []);

  return (
    <section id="blog" className="py-6">
      <h3>
        Blog
        <div />
      </h3>
      <h4>Moje ostatnie przemyślenia...</h4>
      <p className="mb-12 lg:mb-24">
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
