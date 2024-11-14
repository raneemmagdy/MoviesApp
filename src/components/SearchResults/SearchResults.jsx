import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function SearchResults() {
  const { searchResults, loading, error } = useSelector(
    (state) => state.search
  );

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Search Results Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container my-4">
        <h2 className="text-white">Search Results</h2>
        <div className="row">
          {searchResults.map((movie) => (
            <div className="col-md-4 mb-3" key={movie.id}>
              <Link
                className="text-decoration-none"
                to={`/movieDetails/${movie.id}`}
              >
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-warning">{movie.title}</h5>
                    <strong className="card-text">
                      Release Date: {movie.release_date}
                    </strong>
                    <p className="card-text">{movie.overview.slice(0, 100)}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
