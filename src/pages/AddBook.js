import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '', author: '', genre: '', description: '', rating: ''
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(form).some(v => !v)) {
      setError("All fields are required.");
      return;
    }
    dispatch(addBook({ ...form, id: uuidv4() }));
    navigate("/books");
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <h2>Add New Book</h2>
      {error && <p className="error">{error}</p>}
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="author" placeholder="Author" onChange={handleChange} />
      <input name="genre" placeholder="Genre" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input
  name="rating"
  type="number"
  placeholder="Rating (1–5)"
  min="1"
  max="5"
  required
  onChange={handleChange}
/>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
