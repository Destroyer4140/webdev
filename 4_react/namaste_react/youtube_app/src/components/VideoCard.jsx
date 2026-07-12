import React from 'react'

const VideoCard = ({info}) => {
  const { snippet } = info;
  const { statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='m-2 p-2 w-60 shadow-2xl'>
      <img  className='rounded-lg' src={thumbnails.high.url} alt='video_thumbnail' />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  )
};

export default VideoCard;