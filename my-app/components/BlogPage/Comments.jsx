import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, [slug]);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-cardCover text-white px-5 rounded-lg py-6 mb-8">
          <h3 className="text-xl mb-6">{comments.length} Komentarzy</h3>
          {comments.map((comment, index) => (
            <div key={index}>
              <p className="mb-4 sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
                <span className="font-semibold text-light sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
                  {comment.name}
                </span>{' '}
                on {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="whitespace-pre-line w-full sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9">
                Wiadomość: {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
