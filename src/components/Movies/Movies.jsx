
import Movie from "../Movie/Movie";
import MainSlider from "../MainSlider/MainSlider";
import Loading from "../Loading/Loading";
import TrendingMoviesSlider from "../TrendingMoviesSlider/TrendingMoviesSlider";
import useFetchMovies from "../Hooks/useMovies";
import { Helmet } from "react-helmet";

export default function Movies() {
  let url=  `https://api.themoviedb.org/3/movie/popular?api_key=3e900c7706fc519f0627de6b8ef6e26f`
  let data=useFetchMovies(url)
  console.log(data.results);
  let movies=data.results
  if (!movies) return <Loading/>;

  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Movies Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <MainSlider/>
    <TrendingMoviesSlider/>
      <div className="container-fluid my-2 ">
      <div className="row g-4">
      {movies?.map((movie) => 
       <Movie movie={movie} key={movie.id} />)}
      </div>
      </div>
    </>
  );
}
