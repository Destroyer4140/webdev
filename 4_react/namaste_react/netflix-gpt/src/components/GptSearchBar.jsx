import React from 'react'
import { LOGIN_PAGE_BACKGROUND_IMG } from '../utils/constant'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langSelector = useSelector(state => state.config.lang);
  return (
    <div>
      <div className='absolute'>
        <img src={LOGIN_PAGE_BACKGROUND_IMG} alt='background_wallpaper'/>
      </div>
      <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12 z-10'>
          <input type='text' className='p-4 m-4 bg-amber-50 col-span-8' placeholder={lang[langSelector].gptSearchPlaceHolder}/>
          <button className='py-2 px-4 m-4 bg-red-700 text-white col-span-4 rounded-lg'>{lang[langSelector].search}</button>
        </form>
      </div>
    </div>
  )
}

export default GptSearchBar