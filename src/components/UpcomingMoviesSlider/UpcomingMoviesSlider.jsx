
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loading from '../Loading/Loading';
import useFetchMovies from '../Hooks/useMovies';

export default function UpcomingMoviesSlider() {

    let url=  `https://api.themoviedb.org/3/movie/upcoming?api_key=3e900c7706fc519f0627de6b8ef6e26f&language=en-US&page=1`
    let data=useFetchMovies(url)
    console.log(data.results);
    let upcomingMovies=data.results
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
