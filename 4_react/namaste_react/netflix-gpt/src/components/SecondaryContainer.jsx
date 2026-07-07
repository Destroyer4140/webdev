import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black'>
      <div className='-mt-50 pl-12 relative z-2'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies?.popularMovies}/>
        <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Horror"} movies={movies?.nowPlayingMovies}/>
      </div>
      {/**
       * MovieList - Popular
       * MovieList - Now Playing
       * MovieList - Horror
       * MovieList - Romance
      */}
    </div>
  )
}

export default SecondaryContainer