import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../../services';
import { BsFillCalendarDateFill } from 'react-icons/bs';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="text-white mb-6 px-5 lg:px-0">
      <h5 className="mb-6">
        {slug ? 'Powiązane artykuły' : 'Ostatnie artykuły'}
      </h5>
      {relatedPosts.map((post, index) => (
        <section className="mb-12 lg:mb-24" key={index}>
          <div className="relative w-full h-[200px] md:h-[240px] lg:min-h-[320px] mb-6">
            <img src={post.image.url} alt={post.title} className="rounded-lg" />
          </div>
          <div className="lg:py-4 mx-auto">
            <h5 className="mb-2 lg:mb-4">{post.title}</h5>
            <div className="flex items-center mb-6">
              <BsFillCalendarDateFill className="opacity-70" />
              <p className="ml-3 opacity-70">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
            </div>
            <p className="mb-6 lg:mb-12">{post.excerpt}</p>
            <Link href={`/post/${post.slug}`}>
              <button className="lg:px-16">
                <p>Czytaj dalej...</p>
              </button>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default PostWidget;
