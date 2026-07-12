import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, randomStringGenrator } from '../utils/RandomStringGenerator';
import { SENT_BUTTON_EMOJI } from '../utils/constant';


const LiveChat = () => {

  const dispatch = useDispatch();
  const chatMessage = useSelector(store => store.chat.message);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      //API Polling
      dispatch(addMessage({
        name: generateRandomName(),
        message: randomStringGenrator(),
      }));
    }, 1500);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <>
      <div className='w-full h-[600px] m-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
          {
            chatMessage.map((msg, index) => <ChatMessage key={index} name={msg.name} message={msg.message}/>)
          }
        </div>
      </div>
      <form className='w-full p-2 ml-2 border border-black flex' onSubmit={(e) => {
        console.log("On Form Submit ", liveMessage);
        dispatch(addMessage({
          name: "Shubham Kumar",
          message: liveMessage,
        }));
        setLiveMessage("");
        e.preventDefault();
      }}>
        <input className='px-2 w-80' type='text' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)}/>
        <button><img className='w-full mx-2 px-2 h-8' src={SENT_BUTTON_EMOJI} alt='SENT'/></button>
      </form>
    </>
  )
}

export default LiveChat