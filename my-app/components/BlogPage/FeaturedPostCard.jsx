import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-[300px] lg:h-[360px]">
    <img
      src={post.image.url}
      alt={post.title}
      className="absolute w-full h-full object-cover object-center lg:rounded-none"
    />
    <div className="absolute w-full h-full bg-black opacity-70" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white opacity-80 mb-2 ">
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </p>
      <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
        {post.title}
      </p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle drop-shadow-lg rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">
          {post.author.name}
        </p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default FeaturedPostCard;
