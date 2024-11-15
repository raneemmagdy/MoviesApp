import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {fetchSearchResults } from '../Redux/searchSlice';

export default function Navbar() {
  let dispatch = useDispatch();
  let navigate=useNavigate()
  const handleSearchChange = (e) => {
    const query = e.target.value;
    dispatch(fetchSearchResults(query)); 
    navigate('/search-results');
  };
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand logo-color" to="#">Movies App</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/topRatedMovies">Top Rated Movies</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search"  onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearchChange}
            />
            <button className="btn btn-danger bg-button" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
