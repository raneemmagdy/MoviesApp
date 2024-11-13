import React, { useEffect, useState } from 'react'
import Movie from '../Movie/Movie';
import Loading from '../Loading/Loading';
import axios from 'axios';
import UpcomingMoviesSlider from '../UpcomingMoviesSlider/UpcomingMoviesSlider';

export default function TopRatedMovies() {
  let [movies, setMovies] = useState(null);
  async function getAllMovies() {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=3e900c7706fc519f0627de6b8ef6e26f`
      );
      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllMovies();
  }, []);
  if (!movies) return <Loading/>;

  return (
    <>
      <UpcomingMoviesSlider/>
      <div className="container-fluid my-2 ">
      <div className="row g-4">
       <Movie movies={movies} key={movies.id} />
      </div>
      </div>
    </>
  );
}
