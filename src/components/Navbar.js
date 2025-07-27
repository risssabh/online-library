import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">📚 Online Library</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/books">Browse Books</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
