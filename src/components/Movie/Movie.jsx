import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie({movie}) {
  return (
    <>

         <div className="col-md-3"  >
           <div className="card bg-dark text-white">
             <img
               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
               className="card-img-top"
               alt="Movie Poster"
             />

             <div className="card-body">
               <h5 className="card-title">{movie.title}</h5>
               <p className="card-text">
               Release Date:{movie.release_date}

               </p>
               <div className="details">

                 <i className="fa-solid fa-star text-warning"></i> {movie.vote_average}
                 <i className="fa-solid fa-globe ms-3 logo-color"></i> {movie.original_language}
               </div>
               <Link to={`/movieDetails/${movie.id}`} className='btn btn-gradient '>Details</Link>

             </div>
           </div>
        
       </div>
   
    
    </>
  )
}
