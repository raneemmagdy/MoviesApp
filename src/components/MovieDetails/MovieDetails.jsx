import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import useFetchMovies from "../Hooks/useMovies";
import { Helmet } from "react-helmet";

export default function MovieDetails() {
  let { id } = useParams();
  let url = `https://api.themoviedb.org/3/movie/${id}?api_key=3e900c7706fc519f0627de6b8ef6e26f`;
  let data = useFetchMovies(url);
  console.log(data);
  let movie = data;

  if (!movie) return <Loading />;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movie Details Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container mt-5 text-white">
        <div className="row">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="img-fluid"
              alt={`${movie.title} Poster`}
            />
          </div>

          <div className="col-md-8">
            <h2>{movie.title}</h2>
            <p>
              <strong className="text-warning">Status:</strong> {movie.status}
            </p>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.runtime} minutes
            </p>
            <p>
              <strong>Overview:</strong> {movie.overview}
            </p>

            <div className="d-flex align-items-center">
              <p className="mb-0">
                <i className="fa-solid fa-star text-warning"></i>{" "}
                {movie.vote_average} / 10
              </p>
              <p className="ms-3 mb-0">
                <i className="fa-solid fa-globe logo-color"></i>{" "}
                {movie.original_language}
              </p>
            </div>

            <div className="mt-3">
              <strong>Genres: </strong>
              {movie.genres && movie.genres.length > 0 ? (
                movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="badge text-black bg-warning me-2"
                  >
                    {genre.name}
                  </span>
                ))
              ) : (
                <span>No genres available</span>
              )}
            </div>

            <div className="mt-3">
              <a
                href={movie.homepage}
                className="btn bg-button text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Movie Website
              </a>
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                className="btn btn-warning ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on IMDb
              </a>
            </div>

            {movie.belongs_to_collection && (
              <div className="mt-3">
                <p>
                  <strong>Part of Collection:</strong>{" "}
                  {movie.belongs_to_collection.name}
                </p>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.belongs_to_collection.poster_path}`}
                  alt={`${movie.belongs_to_collection.name} Poster`}
                  className="img-fluid"
                  style={{ width: "150px" }}
                />
              </div>
            )}

            <Link to={`/reviews/${id}`} className="text-decoration-none ">
              <strong className="me-3">Check Reviews</strong>
            </Link>
            <Link to={`/credits/${id}`} className="text-decoration-none ">
              <strong className="ms-3">Check Credits</strong>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
