import Movie from '../Movie/Movie';
import Loading from '../Loading/Loading';
import UpcomingMoviesSlider from '../UpcomingMoviesSlider/UpcomingMoviesSlider';
import useFetchMovies from '../Hooks/useMovies';

export default function TopRatedMovies() {
 
  let url=   `https://api.themoviedb.org/3/movie/top_rated?api_key=3e900c7706fc519f0627de6b8ef6e26f`
  let data=useFetchMovies(url)
  console.log(data.results);
  let movies=data.results
  if (!movies) return <Loading/>;

  return (
    <>
      <UpcomingMoviesSlider/>
      <div className="container-fluid my-2 ">
      <div className="row g-4">
      {movies?.map((movie) => 
       <Movie movie={movie} key={movie.id} />)}
      </div>
      </div>
    </>
  );
}
