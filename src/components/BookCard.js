import React from 'react';
import { Link } from 'react-router-dom';

const getGenreEmoji = (genre) => {
  const emojiMap = {
    fiction: "📖",
    "non-fiction": "📘",
    fantasy: "🐉",
    "sci-fi": "🚀",
    thriller: "🕵️",
    "anime-manga": "🎌",
    default: "📚"
  };

  return emojiMap[genre.toLowerCase()] || emojiMap.default;
};

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="emoji-tag">{getGenreEmoji(book.genre)}</div>
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre.replace('-', ' ')}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
