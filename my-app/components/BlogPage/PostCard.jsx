import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => (
  <div className="bg-cardCover text-white shadow-lg rounded-lg pb-10 lg:p-8 mb-8 w-full">
    <div className="relative h-[240px] mb-12">
      <img
        src={post.image.url}
        alt=""
        className="absolute w-full h-full object-cover object-center"
      />
      <div className="absolute w-full h-full bg-cardCover z-10" />
    </div>
    <h4 className="text-xl sm:text-2xl lg:text-3xl text-active mb-6 lg:mb-12 text-center">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h4>
    <div className="block lg:flex text-center items-center justify-center mb-6 w-full">
      <div className="flex items-center justify-center mb-6 lg:mb-0 w-full lg:w-auto mr-8 items-center">
        <Image
          unoptimized
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-gray-700 ml-3 font-medium text-lg">
          {post.author.name}
        </p>
      </div>
      <div className="font-medium text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline mr-2 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="align-middle">
          {moment(post.createdAt).format('MMM DD, YYYY')}
        </span>
      </div>
    </div>
    <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 px-4 text-center mb-6">
      {post.excerpt}
    </p>
    <div>
      <Link href={`/post/${post.slug}`}>
        <button className="border-2 border-light rounded-lg bg-transparent text-light py-2 px-8 lg:py-1 lg:px-24 flex items-center justify-center hover:border-active hover:text-active mx-auto">
          <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-8">
            Czytaj dalej...
          </p>
        </button>
      </Link>
    </div>
  </div>
);

export default PostCard;
