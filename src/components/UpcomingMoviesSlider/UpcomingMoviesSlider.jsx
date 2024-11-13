import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loading from '../Loading/Loading';

export default function UpcomingMoviesSlider() {
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    async function fetchUpcomingMovies() {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=3e900c7706fc519f0627de6b8ef6e26f&language=en-US&page=1`
            );
            setUpcomingMovies(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUpcomingMovies();
    }, []);
   if(!upcomingMovies)return <Loading/>
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <h2 className='text-white'>Upcoming Movies</h2>
           
                <Slider {...settings}>
                    {upcomingMovies.map((movie) => (
                        <div key={movie.id} className="slide">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="movie-poster"
                            />
                            <div className="movie-info">
                                <h3>{movie.title}</h3>
                                <p>Release Date: {movie.release_date}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
          
        </div>
    );
}
