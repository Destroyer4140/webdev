import React from 'react'
import { USER_ICON } from '../utils/constant'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm'>
      <img className='rounded-full bg-green-300 h-8' src={USER_ICON} alt='USER'/>
      <span className='font-bold px-2'>{name+" "}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage