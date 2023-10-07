import React from 'react'

const TeamCompsCard: React.FC = () => {
  return (
    <div
      className='w-full h-[94px] bg-[var(--bg-highlight-clr)] rounded flex items-center px-4'
      style={{ border: '1px solid var(--border-clr)' }}
    >
      <span className='bg-red-400 text-black font-bold h-[24px] w-[24px] flex items-center justify-center rounded'>
        S
      </span>
      <div className='flex flex-col ml-4'>
        <span>Bilgewater Vanquishers</span>
        <span className='bg-[#123040] h-[36px] w-auto text-[#88A0A7] px-2 mt-2 flex items-center rounded'>Fast 8</span>
      </div>
    </div>
  )
}

export default TeamCompsCard
