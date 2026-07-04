import {useState} from "react"
import Header from './Header'
import { LOGIN_PAGE_BACKGROUND_IMG } from '../utils/constant'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src={LOGIN_PAGE_BACKGROUND_IMG} alt='background_wallpaper'/>
      </div>
      <form className='absolute p-12 bg-black/80 align-middle w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg cursor-pointer'>
      
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input type="text" placeholder="Full Name" className='p-4 my-4 text-black bg-gray-700 w-full'/>}

        <input type="text" placeholder="Email or Phone" className='p-4 my-4 text-black bg-gray-700 w-full'/>

        <input type="password" placeholder="Password" className='p-4 my-4 text-black bg-gray-700 w-full'/>

        <button className='p-4 my-6 bg-red-700 w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p className="py-4" onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix? Sign Up Now": "Allready registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login