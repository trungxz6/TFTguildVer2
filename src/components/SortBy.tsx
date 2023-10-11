import React from 'react'

const SortBy: React.FC<{ type: string }> = (props) => {
  return (
    <>
      {(props.type === 'teamComps' && (
        <div className='flex items-center justify-between mb-4'>
          <span className='bg-[--bg-highlight-clr] h-[36px] cursor-pointer text-[#88A0A7] hover:text-white hover:bg-[var(--btn-clr)] px-2 flex items-center rounded'>
            Patch 13.9b
          </span>
          <div className='w-[32%] flex items-center justify-between'>
            <span className='bg-[--bg-highlight-clr] h-[36px] cursor-pointer text-[#020202] hover:text-white hover:bg-[var(--btn-clr)] px-2 rounded flex items-center'>
              <span className='text-[#bfff7f] text-[22px] mr-1'>▴</span>Tier Up
            </span>
            <span className='bg-[--bg-highlight-clr] h-[36px] cursor-pointer text-[#88A0A7] hover:text-white hover:bg-[var(--btn-clr)] px-2 rounded flex items-center'>
              <span className='text-[#ff7f7f] text-[22px] mr-1'>▾</span>Tier Down
            </span>
            <span className='bg-[--bg-highlight-clr] h-[36px] cursor-pointer text-[#88A0A7] hover:text-white hover:bg-[var(--btn-clr)] px-2 rounded flex items-center'>
              <span className='text-[#ffdf7f] text-[13px] font-bold mr-2'>N</span>New
            </span>
          </div>
        </div>
      )) ||
        (props.type === 'metaReport' && (
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center justify-between'>
              <span className='bg-[--bg-highlight-clr] h-[36px] mr-4 cursor-pointer text-[#88A0A7] hover:text-white hover:bg-[var(--btn-clr)] px-2 rounded flex items-center'>
                Patch 13.9b
              </span>
              <span className='bg-[--bg-highlight-clr] h-[36px] mr-4 cursor-pointer text-[#88A0A7] hover:text-white hover:bg-[var(--btn-clr)] px-2 rounded flex items-center'>
                Diamond +
              </span>
              <span className='bg-[--bg-highlight-clr] h-[36px] cursor-pointer text-[#88A0A7] hover:text-white hover:bg-[var(--btn-clr)] px-2 rounded flex items-center'>
                Last Updated: Mon Oct 09 2023
              </span>
            </div>
            <span className='bg-[--bg-highlight-clr] h-[36px] cursor-pointer text-[#88A0A7] hover:text-white hover:bg-[var(--btn-clr)] px-2 flex items-center rounded'>
              321,773 Comps Analyzed
            </span>
          </div>
        ))}
    </>
  )
}

export default SortBy
