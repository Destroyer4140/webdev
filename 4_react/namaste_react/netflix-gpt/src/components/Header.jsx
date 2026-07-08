import React, { useEffect } from 'react'
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES, USER_ICON_LINK } from '../utils/constant'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from "../utils/configSlice"

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const isGPTSearchEnable = useSelector(state => state.gpt.showGptSearch);

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

    useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribed when component unmounts.
    return () => unsubscribed();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search Page.
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
      <div className='absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={NETFLIX_LOGO} alt='logo'/>
        {
        user && 
        (<div className='flex p-2'>
          {isGPTSearchEnable && (<select className='p-2 bg-gray-900 rounded-lg text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identofier} value={lang.identofier}>{lang.name}</option>)}
          </select>)}
          <button className='py-2 px-4 mx-4 bg-purple-800 text-white rounded-lg'
          onClick={handleGptSearchClick}>
            {isGPTSearchEnable ? "Home" : "GPT-Search"}
          </button>
          <img className='w-12 h-12' alt='usericon' src={user?.photoURL}/>
          <button onClick={handleSignout} className='font-bold text-white'>SignOut</button>
        </div>)
        }
      </div>
  );
}

export default Header