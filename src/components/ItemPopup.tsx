import React from 'react'
import { BaseItems, Origins, Classes, CombinedItems, Champions } from '../data/Data'
import iconAD from '../assets/icon/iconAd.svg'

const AatroxData = Champions[0]

export const checkIcon = (iconName: string) => {
  if (iconName === 'Damage') {
    return <img src={iconAD} />
  }
}

const ItemPopup: React.FC = () => {
  return (
    <div className='mt-[200px] border border-solid p-[10px]'>
      {/* IMAGE AND STAT */}
      <div className='flex items-center'>
        <img
          className='w-[40px]'
          src={AatroxData.itemBuild[0].src}
          alt={AatroxData.itemBuild[0].name}
        />
        <div className=''>
          <div className=''>{AatroxData.itemBuild[0].name}</div>
          <div>
            <span>{AatroxData.itemBuild[0].stat[0].name}</span> <span>{AatroxData.itemBuild[0].stat[0].stat}</span>
          </div>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div></div>
      {/* RECIPE */}
      <div></div>
    </div>
  )
}

export default ItemPopup
