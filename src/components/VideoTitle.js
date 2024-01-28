import React from 'react'

const VideoTitle = ({title,overview}) => {
   
  return (<div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
    <h1 className='text-6xl font-bold'>{title}</h1>
    <p className='py-6 text-lg w-1/4'>{overview}</p>
    <div>
    <button className='bg-white text-xl text-black px-10 rounded-md py-2 hover:opacity-70'> Play</button>
    <button className='bg-gray-500 text-xl mx-2  text-white px-10 rounded-md py-2 opacity-50 hover:opacity-90'>More Info</button>
    </div>
    
  </div>
  )
}

export default VideoTitle