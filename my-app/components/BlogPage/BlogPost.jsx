import React from 'react';
import Link from 'next/link';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import moment from 'moment';

const BlogPost = ({ post }) => {
  return (
    <section className="mb-12 lg:mb-24">
      <div className="relative w-full h-[200px] md:h-[240px] lg:min-h-[320px] mb-6">
        <img src={post.image.url} alt={post.title} className="rounded-lg" />
      </div>
      <div className="lg:py-4 mx-auto">
        <h5 className="mb-4 lg:mb-4">{post.title}</h5>
        <div className="flex items-center mb-6">
          <BsFillCalendarDateFill className="opacity-70" />
          <p className="ml-3 opacity-70 text-sm sm:text-base lg:text-lg">
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
  );
};

export default BlogPost;
