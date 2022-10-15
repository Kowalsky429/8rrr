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
      <p className="mb-12">
        Poniżej znajdują się najnowsze posty które zachęcam do obejrzenia w
        których możesz dowiedzieć się wiele na temat zdrowego żywienia,
        suplementacji czy smacznych i prostych przepisów kulinarnych.
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
