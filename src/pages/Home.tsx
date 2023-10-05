import React from 'react'
import layer1 from '../assets/images/layer1.png'
import video1 from '../assets/videos/video1.webm'

const Home: React.FC = () => {
  return (
    <>
      <video
        src={video1}
        autoPlay
        muted
        playsInline
        loop
        preload='auto'
        className='w-full object-cover mt-[53px]'
      />
      <img
        src={layer1}
        className='w-full object-cover'
        alt='layer1'
      />
    </>
  )
}

export default Home
