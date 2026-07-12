import React from 'react'
import { HAMBURGER_ICON, USER_ICON, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // make an api call after ever key press, but if
    // the difference between 2 api calls is <200ms the decline the api call
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }else {
        getSearchSuggestions();
      }
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults(
      {
        [searchQuery]: json[1],
      }
    ));
    // console.log(json[1]);
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={toggleMenuHandler} className='h-8 cursor-pointer' src={HAMBURGER_ICON} alt='Hamburger Icon'/>
        <a href='/'>
          <img className='h-10 rounded-lg mx-2' src={YOUTUBE_LOGO} alt='Youtube Logo'/>
        </a>
      </div>
      <div className='col-span-10 px-40'>
        <div>
          <input value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          className='w-1/2 p-2 border border-gray-400 rounded-l-full' type='text'/>
          <button className='p-2 px-5 border border-gray-400 rounded-r-full bg-gray-200'>🔍</button>
        </div>
        {showSuggestions && <div className='fixed bg-white py-2 px-2 w-105 rounded-lg shadow-lg border border-gray-100'>
          <ul>
            {suggestions.map((suggestion) => <li key={suggestion} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {suggestion}</li>)}
            
          </ul>
        </div>}
      </div>
      <div className='col-span-1'>
        <img className='h-8' src={USER_ICON} alt='User Icon'/>
      </div>
    </div>
  )
}

export default Header