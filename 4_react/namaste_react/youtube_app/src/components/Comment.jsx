import React from 'react'
import { USER_ICON } from '../utils/constant'

const Comment = ({data}) => {
  const {name, comment} = data;
  return (
    <div className='flex shadow-sm bg-gray-50 p-2'>
      <img className='w-12 h-12' alt='user' src={USER_ICON}/>
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  )
}

export default Comment