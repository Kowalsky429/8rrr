import React from 'react';
import Image from 'next/image';

function Author({ author }) {
  return (
    <div className="text-center mt-12 mb-8 p-12 relative rounded-lg bg-black bg-opacity-30">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          alt={author.name}
          unoptimized
          width="100px"
          height="100px"
          className="bigauthor"
          src={author.photo.url}
        />
      </div>
      <h5 className="my-6">{author.name}</h5>
      <p className="max-w-[800px] mx-auto">{author.bio}</p>
    </div>
  );
}

export default Author;
