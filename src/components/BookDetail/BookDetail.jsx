import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredDB } from "../../utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  // console.log(typeof bookId, typeof id, typeof data[0].bookId)

  const book = data.find((book) => book.bookId === id);

  const { bookId: currentBookId, image } = book;

  const handleMarkAsRead = (id) => {
    /**
     * 1. understand what to store or save: => bookId
     * 2. where to store: database
     * 3. array, list, collection:
     * 4. check: if the book is already in the readList
     * 5. if not, then add the book to the list
     * 6. if yes, do not add the book
     */

    addToStoredDB(id);
  };

  return (
    <div className="my-12">
      <h2>Book Details: {bookId}</h2>
      <img className="w-36" src={image} alt="" />
      <br />
      <button
        className="btn btn-outline btn-accent mr-4"
        onClick={() => handleMarkAsRead(bookId)}
      >
        Mark as Read
      </button>
      <button
        onClick={() => handleMarkAsRead(bookId)}
        className="btn btn-accent"
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default BookDetail;
