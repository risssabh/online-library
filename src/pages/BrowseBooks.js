import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BrowseBooks = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const allBooks = useSelector(state => state.books.list);
  const [search, setSearch] = useState("");

  const filteredBooks = allBooks.filter(book =>
    (!category || book.genre.toLowerCase() === category.toLowerCase()) &&
    (book.title.toLowerCase().includes(search.toLowerCase()) || 
     book.author.toLowerCase().includes(search.toLowerCase()))
  );

  const displayCategory = {
    "anime-manga": "Anime / Manga",
    fiction: "Fiction",
    "non-fiction": "Non-Fiction",
    fantasy: "Fantasy",
    "sci-fi": "Sci-Fi",
    thriller: "Thriller",
  };

  // ✅ Redirect to 404 if search is active and nothing is found
  useEffect(() => {
    if (search.trim() !== "" && filteredBooks.length === 0) {
      navigate('/404');
    }
  }, [search, filteredBooks, navigate]);

  return (
    <div>
      <h2>Browse {category ? (displayCategory[category] || category) : "All"} Books</h2>
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="book-grid">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
