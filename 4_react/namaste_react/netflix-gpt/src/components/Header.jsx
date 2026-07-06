import React from 'react'
import { NETFLIX_LOGO, USER_ICON_LINK } from '../utils/constant'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
      <div className='absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between'>
        <img className='w-44'
        src={NETFLIX_LOGO} alt='logo'/>
        {user && (<div className='flex p-2'>
          <img className='w-12 h-12' alt='usericon' src={user?.photoURL}/>
          <button onClick={handleSignout} className='font-bold text-white'>SignOut</button>
        </div>)}
      </div>
  );
}

export default Header