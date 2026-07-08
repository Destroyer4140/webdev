import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector(state => state.gpt);

  if(!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black text-white absolute z-10 w-screen bg-opacity-10'>
     { 
     movieNames.map((movieName, index) => 
      <MovieList key={movieName} 
        title={movieNames[index]} 
        movies={movieResults[index]}
      />)
     }
      
    </div>
  )
}

export default GptMovieSuggestion