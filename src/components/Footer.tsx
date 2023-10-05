import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <div className='bg-[var(--bg-highlight-clr)] w-full'>
        <div className='max-w-[1280px] mx-auto h-16 flex items-center justify-evenly no-underline'>
          <a
            href='#'
            className='no-underline text-lg text-[var(--text-clr)] hover:text-[var(--text-highlight-clr)]'
          >
            Privacy Policy
          </a>
          <a
            href='#'
            className='no-underline text-lg text-[var(--text-clr)] hover:text-[var(--text-highlight-clr)]'
          >
            Contact
          </a>
          <a
            href='#'
            className='no-underline text-lg text-[var(--text-clr)] hover:text-[var(--text-highlight-clr)]'
          >
            Manage Cookie Settings
          </a>
          <a
            href='#'
            className='no-underline text-lg text-[var(--text-clr)] hover:text-[var(--text-highlight-clr)]'
          >
            Set Skin
          </a>
        </div>
      </div>
      <div className='max-w-[1280px] mx-auto mt-4 text-[var(--text-clr)] flex flex-col items-center'>
        <span className='mb-4 text-center leading-6'>
          <span className='text-[var(--text-highlight-clr)]'>TFT TOP 8</span> isn’t endorsed by Riot Games and doesn’t
          reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of
          Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League
          of Legends © Riot Games, Inc.
        </span>
        <span className='text-[var(--text-highlight-clr)] mb-4'>© 2023 TFT TOP 8</span>
      </div>
    </>
  )
}

export default Footer
