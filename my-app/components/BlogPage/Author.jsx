import React from 'react';
import Image from 'next/image';

function Author({ author }) {
  return (
    <div className="text-center mt-12 mb-8 p-12 relative rounded-lg bg-cardCover">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          alt={author.name}
          unoptimized
          width="100px"
          height="100px"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h4 className="text-lg sm:text-xl lg:text-2xl text-light my-6">
        {author.name}
      </h4>
      <p className="sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9 text-white max-w-[800px] mx-auto">
        {author.bio}
      </p>
    </div>
  );
}

export default Author;
