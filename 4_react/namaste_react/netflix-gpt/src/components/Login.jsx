import { useState, useRef } from "react"
import Header from './Header'
import { LOGIN_PAGE_BACKGROUND_IMG } from '../utils/constant'
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    // Validate the form data validation
    const message = checkValidData(email.current.value, password.current.value)
    setErrMessage(message);
    if(message) return;

    // Signin / Signup
    if(!isSignInForm) {
      //Signup Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/65092578?s=400&u=cc60b6104c3e0a1d9dde1bf8117fa3d70d5e9042&v=4"
            }).then(() => {
              // Profile updated!
              const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
              navigate("/browse");
            }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrMessage(errorCode + "-" + errorMessage);
            });
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMessage(errorCode + "-" + errorMessage);
          });

    }else {
      // Signin Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errMessage);
        });
    }
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src={LOGIN_PAGE_BACKGROUND_IMG} alt='background_wallpaper'/>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 bg-black/80 align-middle w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg cursor-pointer'>

        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className='p-4 my-4 text-black bg-gray-700 w-full'/>}

        <input ref={email} type="text" placeholder="Email or Phone" className='p-4 my-4 text-black bg-gray-700 w-full'/>

        <input ref={password} type="password" placeholder="Password" className='p-4 my-4 text-black bg-gray-700 w-full'/>

        <p className="text-red-500">{errMessage}</p>

        <button className='p-4 my-6 bg-red-700 w-full' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p className="py-4" onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix? Sign Up Now": "Allready registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login