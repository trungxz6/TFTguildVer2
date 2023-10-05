import React from 'react'
import { BaseItems, Origins, Classes, CombinedItems, Champions } from '../data/Data'

const AatroxData = Champions[0]

const ItemPopup: React.FC = () => {
  return (
    <div className='border border-solid border-[#1f485f] text-[#fef6f3] font-semibold max-w-[500px]'>
      {/* IMAGE AND STAT */}
      <div className='flex items-center p-[10px]'>
        <img
          className='w-[40px]'
          src={AatroxData.itemBuild[0].src}
          alt={AatroxData.itemBuild[0].name}
        />
        <div className='ml-[10px]'>
          <div className=''>{AatroxData.itemBuild[0].name}</div>
          <div className='flex items-center'>
            <div className='w-[15px] h-[15px] mr-[5px] self-center'>{AatroxData.itemBuild[0].stat[0].icon}</div>
            <div className='text-sm mr-[5px]'>{AatroxData.itemBuild[0].stat[0].stat}</div>
            <div className='w-[15px] h-[15px] mr-[5px]'>{AatroxData.itemBuild[0].stat[1].icon}</div>
            <div className='text-sm mr-[5px]'>{AatroxData.itemBuild[0].stat[1].stat}</div>
          </div>
        </div>
      </div>
      {/* DIVIDER */}
      <div className=' border-solid border border-t-[#1f485f] border-x-transparent border-b-transparent'></div>
      {/* DESCRIPTION */}
      <div className='font-medium p-[10px]'>{AatroxData.itemBuild[0].desc}</div>
      {/* DIVIDER */}
      <div className=' border-solid border border-t-[#1f485f] border-x-transparent border-b-transparent'></div>
      {/* RECIPE */}
      <div className='flex items-center p-[10px]'>
        <div className='text-[#88A0A7]'>Recipe:</div>
        <img
          className='w-[23px] h-[23px] border border-[#1f485f] border-solid ml-[10px]'
          src={AatroxData.itemBuild[0].recipe[0].src}
        />
        <img
          className='w-[23px] h-[23px] border border-[#1f485f] border-solid ml-[10px]'
          src={AatroxData.itemBuild[0].recipe[1].src}
        />
      </div>
    </div>
  )
}

export default ItemPopup
