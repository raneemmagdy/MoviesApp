import React from 'react'

import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Movies from './components/Movies/Movies'
import TopRatedMovies from './components/TopRatedMovies/TopRatedMovies'

import MovieDetails from './components/MovieDetails/MovieDetails'
import Reviews from './components/Reviews/Reviews'
import Credits from './components/Credits/Credits'
import { Provider } from 'react-redux'
import { globalStore } from './components/Redux/store'
import SearchResults from './components/SearchResults/SearchResults'



export default function App() {

  let routes=createHashRouter([
    {path:'/',element:<Layout/>,children:[
      {index:true,element:<Movies/>},
      {path:'/topRatedMovies',element:<TopRatedMovies/>},
     
      {path:'/movieDetails/:id',element:<MovieDetails/>},
      {path:'/reviews/:id',element:<Reviews/>},
      {path:'/credits/:id',element:<Credits/>},
      {path:'/search-results',element:<SearchResults/>},


      

    ]}
  ])
  return (
    <>
   
 <Provider store={globalStore}>
 <RouterProvider router={routes}/>
 

 </Provider>
    </>
  )
}
