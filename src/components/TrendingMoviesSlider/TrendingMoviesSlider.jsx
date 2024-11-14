
import Slider from 'react-slick'; // Import react-slick
import { Link } from 'react-router-dom';
import useFetchMovies from '../Hooks/useMovies';
import Loading from '../Loading/Loading';

export default function TrendingMoviesSlider() {
 
  const apiKey = '3e900c7706fc519f0627de6b8ef6e26f';
  let url=  `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
  let data=useFetchMovies(url)
  console.log(data.results);
  let trendingMovies=data.results
 
  const sliderSettings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  if(!trendingMovies)return<Loading/>
  return (
    <div className="container-fluid px-4">
      <h3 className="text-white">Trending Movies</h3>
      <Slider {...sliderSettings}>
        {trendingMovies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/movieDetails/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid"
              />
              <h5 className="text-white mt-2">{movie.title}</h5>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
