
import Slider from "react-slick";
import useFetchMovies from "../Hooks/useMovies";
import Loading from "../Loading/Loading";

export default function MainSlider() {
 
  let url=`https://api.themoviedb.org/3/movie/popular?api_key=3e900c7706fc519f0627de6b8ef6e26f`
  let data=useFetchMovies(url)
  //console.log(data.results);
  let movies=data.results
 
if(!movies)return <Loading/>

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings} className="mb-4">
        {movies?.map((movie) => (
          <div key={movie.id} className="slider-item position-relative">
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
              className="card-img-top"
              alt="Movie Poster"
            />
            <div className="overlay">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-tagline">{movie.tagline}</p>
              <div className="movie-details">
                <p className="movie-rating">
                  Rating: {movie.vote_average} <i className="fa-solid fa-star text-warning"></i>
                </p>
                <p className="movie-release-date">Release: {movie.release_date}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
