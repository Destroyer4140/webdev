import React from 'react'
import Button from './Button'
import { GENER_BUTTON } from '../utils/constant'

const ButtonList = () => {
  
  return (
    <div className='flex w-screen'>
      {GENER_BUTTON.map((name, index) => <Button key={name+index} name={name}/>)}
    </div>
  )
}

export default ButtonList