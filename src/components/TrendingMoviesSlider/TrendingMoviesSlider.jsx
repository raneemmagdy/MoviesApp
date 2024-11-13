import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick'; // Import react-slick
import { Link } from 'react-router-dom';

export default function TrendingMoviesSlider() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const apiKey = '3e900c7706fc519f0627de6b8ef6e26f';
  
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    fetchTrendingMovies();
  }, []);

 
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
