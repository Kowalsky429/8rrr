import React from 'react';
import Link from 'next/link';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import moment from 'moment';

const BlogPost = ({ post }) => {
  return (
    <section className="lg:flex lg:bg-cardCover lg:rounded-lg mb-12 lg:mb-24">
      <div className="relative w-full h-[200px] md:h-[240px] lg:min-h-[390px] lg:max-w-[500px] mb-6 lg:mb-0">
        <img
          src={post.image.url}
          alt={post.title}
          className="absolute w-full h-full object-cover object-center rounded-lg lg:rounded-none lg:rounded-l-lg"
        />
      </div>
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:px-24 lg:py-4 mx-auto">
        <h4 className="text-lg sm:text-xl lg:text-2xl text-light mb-2 lg:mb-4">
          {post.title}
        </h4>
        <div className="flex items-center mb-6">
          <BsFillCalendarDateFill className="opacity-70" />
          <p className="ml-3 opacity-70 sm:text-lg sm:leading-10 lg:text-xl">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </p>
        </div>
        <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8 lg:text-center mb-6 lg:mb-12">
          {post.excerpt}
        </p>
        <Link href={`/post/${post.slug}`}>
          <button className="border-2 border-light rounded-lg bg-transparent text-light py-2 px-8 lg:py-1 lg:px-24 flex items-center justify-center hover:border-active hover:text-active">
            <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
              Czytaj dalej...
            </p>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BlogPost;
