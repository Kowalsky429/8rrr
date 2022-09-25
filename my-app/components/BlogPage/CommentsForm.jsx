import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../../services';

function CommentsForm({ slug }) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, []);

  const handleCommentSubmission = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }
    const commentObj = { comment, name, email, slug };

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-cardCover text-white shadow-lg rounded-lg py-8 pb-12 mb-8 px-5">
      <h3 className="text-xl mb-6">Zostaw komentarz</h3>
      <div className="grid grid-cols-1 grid-gap-4">
        <textarea
          ref={commentEl}
          className="border-2 border-light rounded-lg bg-transparent text-light p-4 md:px-6 sm:text-lg lg:text-xl"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-gap-4 mb-6">
        <input
          type="text"
          ref={nameEl}
          className="border-2 border-light rounded-lg bg-transparent text-light p-4 md:px-6 sm:text-lg lg:text-xl my-8"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="border-2 border-light rounded-lg bg-transparent text-light p-4 md:px-6 sm:text-lg lg:text-xl"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 grid-gap-4 mb-4">
        <div>
          <input
            type="checkbox"
            ref={storeDataEl}
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="text-active cursor-pointer ml-2"
            htmlFor="storeData"
          >
            Save my email and name for the next time comment
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-active">All fields are required.</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="bg-titleDecoration transition duration-500 ease hover:bg-titleDecoration px-8 py-3 cursor-pointer rounded-lg"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="text-xl flat-right font-semibold text-active mt-3">
            Comment Submited for review
          </span>
        )}
      </div>
    </div>
  );
}

export default CommentsForm;
