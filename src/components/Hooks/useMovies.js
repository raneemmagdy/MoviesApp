
import { useState, useEffect } from "react";
import axios from "axios";


export default function useFetchMovies(url) {
  const [movies, setMovies] = useState([]);
  

  async function getMovies() {
    try {
      const { data } = await axios.get(url);
      setMovies(data);
   
    } catch (err) {
     console.log(err)
    }
  }

  useEffect(() => {
  
      getMovies();
   
  }, []);

  return movies;
}
