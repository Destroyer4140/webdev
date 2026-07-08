import React, { useRef } from 'react'
import { API_OPTIONS, LOGIN_PAGE_BACKGROUND_IMG } from '../utils/constant'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { addGPTMovieResult } from '../utils/gptSlice'
// import openai from '../utils/openai'

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langSelector = useSelector(state => state.config.lang);
  const dispatch = useDispatch();


  // search movies in tmdb database.
  const fetchMovies = async (movieName) => {
    const movie = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movieName+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await movie.json();
    return json.results;
  }

  const handleGPTSearchClick = async () => {

    const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query" + searchText.current.value+ ". Only Give me names of 5 movies at a time comma seperated like example result given ahead : Gadar, Sholey, Don, Houseful and Golmal";

    // const gptResponse = await openai.responses.create({
    //                     model: 'gpt-5.5',
    //                     instructions: 'You are a coding assistant that talks like a pirate',
    //                     input: gptQuery,
    //                   });
    let defaultMovies = ["Andaz Apna Apna", "Race", "Housefull", "Rich", "Poor"];
    // if(!gptResponse.output_text) {
    //   // TODO: Write Error handling
    // }
    // const gptMovies = gptResponse.output_text ? gptResponse.output_text?.message?.content?.split(",") : defaultMovies;
    const movies = defaultMovies.map((movie) => fetchMovies(movie));
    const tmdbMovies = await Promise.all(movies);
    dispatch(addGPTMovieResult({movieNames: defaultMovies, movieResults: tmdbMovies}));
    console.log(tmdbMovies);
  }

  return (
    <div>
      <div className='absolute'>
        <img src={LOGIN_PAGE_BACKGROUND_IMG} alt='background_wallpaper'/>
      </div>
      <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 z-10' onSubmit={(e) => e.preventDefault()}>
          <input ref={searchText} type='text' className='p-4 m-4 bg-amber-50 col-span-8' placeholder={lang[langSelector].gptSearchPlaceHolder}/>
          <button className='py-2 px-4 m-4 bg-red-700 text-white col-span-4 rounded-lg'
          onClick={handleGPTSearchClick}
          >{lang[langSelector].search}</button>
        </form>
      </div>
    </div>
  )
}

export default GptSearchBar