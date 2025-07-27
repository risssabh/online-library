import React from 'react';
import { Link } from 'react-router-dom';
import { bookCategories, popularBooks } from '../data/bookData';
import BookCard from '../components/BookCard';

const Home = () => {
  return (
    <div className="home">
      <h1>📚 Welcome to the Online Book Library</h1>
      <p className="tagline">Where Stillness Meets Stories</p>

      <h2>📖 Categories</h2>
      <ul className="category-list">
        {bookCategories.map(cat => (
          <li key={cat}>
            <Link to={`/books/${cat.toLowerCase()}`}>{cat}</Link>
          </li>
        ))}
      </ul>
      <h2>🔥 Popular Books</h2>
      <div className="book-grid">
        {popularBooks.map(book => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default Home;
