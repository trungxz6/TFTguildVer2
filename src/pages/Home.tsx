import React from 'react'
import layer1 from '../assets/images/layer1.png'
import layer2 from '../assets/images/layer2.png'
import layer3 from '../assets/images/layer3.png'
import layer4 from '../assets/images/layer4.png'
import video1 from '../assets/videos/video1.webm'
import Section from '../components/Section'
import { Button } from 'antd'

const Home: React.FC = () => {
  return (
    <>
      <div className='w-full'>
        <video
          src={video1}
          autoPlay
          muted
          playsInline
          loop
          preload='auto'
          className='w-full object-cover mt-[49px]'
        />
        <div className='w-full absolute left-0 top-[35%] flex flex-col items-center justify-center '>
          <span className='text-5xl text-[var(--text-highlight-clr)] font-bold'>
            Your Companion for Teamfight Tactics
          </span>
          <span className='text-2xl font-bold text-[var(--primary-clr)] mt-4'>Become the Next Little Legend</span>
          <span className='w-[60%] text-xl text-center text-[var(--text-blur-clr)] mt-4'>
            Play smarter and climb the ranks in TFT with constantly updated item guides, team recommendations, and deep
            champion stat analysis. Now available in-game!
          </span>
          <Button
            type='primary'
            className='bg-[#0BC4E2] mt-6 text-[var(--text-clr)]'
          >
            DISCOVER NOW
          </Button>
        </div>
      </div>

      <Section />
      <div className='w-full relative flex items-center justify-center overflow-hidden'>
        <img
          src={layer1}
          className='w-full'
        />
        <img
          src={layer2}
          className='w-full absolute'
        />
        <img
          src={layer3}
          className='w-full absolute'
        />
        <img
          src={layer4}
          className='w-full absolute'
        />
      </div>
    </>
  )
}

export default Home
