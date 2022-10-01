import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../../services';

function CommentsForm({ slug }) {
  const [error, setError] = useState(false);
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
    <div className="bg-black bg-opacity-30 text-white shadow-lg rounded-lg py-8 pb-12 mb-8 px-5">
      <h5 className="mb-6 text-white">Zostaw komentarz</h5>
      <div className="grid grid-cols-1 grid-gap-4">
        <textarea
          ref={commentEl}
          className="p-4 md:px-6 h-[200px] lg:h-[300px] sm:text-lg sm:leading-10 lg:text-xl lg:leading-12 leading-9"
          placeholder="Komentarz..."
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 grid-gap-4 mb-6">
        <input
          type="text"
          ref={nameEl}
          className="p-4 my-8 sm:text-lg lg:text-xl"
          placeholder="Imię"
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="p-4 md:px-6 sm:text-lg lg:text-xl"
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
            className="text-active cursor-pointer ml-2 leading-9"
            htmlFor="storeData"
          >
            Zapisz mój e-mail oraz imię do następnego komentarza
          </label>
        </div>
      </div>
      {error && <p className="text-warn">Wszystkie pola są wymagane!</p>}
      <div className="mt-8 flex items-center">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="bg-white border-none bg-opacity-10 hover:bg-opacity-30 hover:text-light"
        >
          <p>Dodaj komentarz</p>
        </button>
        {showSuccessMessage && (
          <h5 className="ml-5">Komentarz wysłany do akceptacji!</h5>
        )}
      </div>
    </div>
  );
}

export default CommentsForm;
